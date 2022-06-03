import React, { Component, useEffect, useState } from 'react';
import { useToasts } from "react-toast-notifications";



import Doctor from '../doctorModel';
import * as doctorService from "../../../services/doctorService";
import DoctorList from '../DoctorList/doctorList';



const DoctorAdd = ({ ...props }) => {
    const { addToast } = useToasts();
    const [doctorModel, setDoctorModel] = useState(new Doctor());
   
    const [errors, setErrors] = useState({})
   

    const resetForm = () => {
        setDoctorModel(new Doctor());
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setDoctorModel({
            ...props.doctorList.find((x) => x.id == props.currentId),
          });
          
        }
      }, [props.currentId]);


    const validate = (fieldValues = doctorModel) => {
        let temp = { ...errors }
        if ('name' in fieldValues) {
            temp.name = "";
            temp.name += fieldValues.name ? "" : "This field is Required"
        }
       
        setErrors({
            ...temp
        })

        if (fieldValues == doctorModel)
            return Object.values(temp).every(x => x == "")

    }



    const saveDoctor = (e) => {
       
        e.preventDefault();

        if (validate()) {
            console.log(doctorModel)
            if (props.currentId == 0) {
                doctorService.Add(doctorModel).then(res => {
                    if (res.data != null) {
    
                        addToast("Submitted successfully", {
                            appearance: "success",
                            autoDismiss: true
                        });
                        resetForm();
                    }
    
                    else {
                        addToast("Submitted successfully", {
                            appearance: "error",
                            autoDismiss: true
                        });
                    }
    
    
                })
              } else {
                
                doctorService.Update(doctorModel).then(res => {
                    if (res.data != null) {
    
                        addToast("Updated successfully", {
                            appearance: "success",
                            autoDismiss: true
                        });
                        resetForm();
                    }
    
                    else {
                        addToast("Submitted successfully", {
                            appearance: "error",
                            autoDismiss: true
                        });
                    }
    
    
                })
              }
         

        }

    }

    useEffect(() => {
        
    },[])

   

    const handleInputChange = (e) => {
       
        const { name, value } = e.target;
        const fieldsValue = { [name]: value };
        
        setDoctorModel({ ...doctorModel, ...fieldsValue });
       
        validate(fieldsValue)
    }
    return (<>
        
        <div className='container'>
        <div className='card'>
        <h2 style={{margin:'auto',padding:'8px'}}>Doctor Create</h2>
        </div>
        <div className='row'>
            
                <form >
                <div className="form-group">
                    <label >Name:</label>
                    <input className="form-control" type="text" name="name" value={doctorModel.name} onChange={handleInputChange}/>
                    {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label >Degree:</label>
                    <input className="form-control" type="text" name="degree" value={doctorModel.degree} onChange={handleInputChange} />
                
                </div>
                <div className="form-group">
                    <label >YearsOfExperience:</label>
                    <input className="form-control" type="number" name="yearsOfExperience" value={doctorModel.yearsOfExperience} onChange={handleInputChange} />
                
                </div>
                <div className="form-group">
                    <label >Phone No:</label>
                    <input className="form-control" type="text" name="phoneNo" value={doctorModel.phoneNo} onChange={handleInputChange}  />
                
                </div>
                <div className="form-group">
                    <label >BMDC:</label>
                    <input className="form-control" type="text" name="bmdc" value={doctorModel.bmdc} onChange={handleInputChange} />
                    
                </div>
                <div className="form-group">
                    <label >Fees:</label>
                    <input className="form-control" type="number" name="fees" value={doctorModel.fees} onChange={handleInputChange} />
                
                </div>
                <div className="form-group" style={{marginTop:'5px'}}>
                <button className="btn btn-danger" onClick={saveDoctor}>Save</button>
                </div>
                </form>
          
           

        </div>
        </div>
       

    </>

    )
}

export default DoctorAdd;