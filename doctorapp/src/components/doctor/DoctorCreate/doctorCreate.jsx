import React, { Component, useEffect, useState } from 'react';

import axios from "axios";
import { useToasts } from "react-toast-notifications";
import Doctor from '../doctorModel';
import * as doctorService from "../../../services/doctorService";
const DoctorAdd = () => {
    const { addToast } = useToasts();
    const [doctorModel, setDoctorModel] = useState(new Doctor());
   
    const [errors, setErrors] = useState({})
   

    const resetForm = () => {
        setDoctorModel(new Doctor());
    }


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
        <h1>Contact</h1>
        <div className='container'>
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
            

           

            <button className="btn btn-danger" onClick={saveDoctor}>Save</button>
        </form>
        </div>
       

    </>

    )
}

export default DoctorAdd;