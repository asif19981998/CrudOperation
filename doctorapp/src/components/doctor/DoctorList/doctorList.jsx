import React, { Component, useEffect, useState } from 'react';


import { useToasts } from "react-toast-notifications";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import * as doctorService from "../../../services/doctorService";
import DoctorAdd from '../DoctorCreate/doctorCreate';

const DoctorList = () => {
    const { addToast } = useToasts();
    const [doctorList,setDoctorList]=useState([]);
    const [currentId, setCurrentId] = useState(0)
    
    useEffect(()=>{
        doctorService.GetAll()
        .then(res=>{
           
            setDoctorList(res.data)
        })
        .catch(err=>{
            addToast("Unable To Get", {
                appearance: "error",
                autoDismiss: true
            });
        })
    
    },[doctorList])

   const handleDelete=(model)=>{
       doctorService.Delete(model)
       .then(res=>alert("Khela sesh"))
       .catch(error=>alert(error))
   }
   const handleUpdate=(model)=>{
    doctorService.Update(model)
    .then(res=>alert("Updated"))
    .catch(error=>alert(error))
   }


    return(
        <div className='row'>
          <div className='col-md-4'>
              <DoctorAdd {...({ currentId, setCurrentId,doctorList })} />
          </div>
          <div className='col-md-8'>
            <div className='card'>
            <h2 style={{margin:'auto',padding:'8px'}}>Doctor List</h2>
            </div>
         
          <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Degree</th>
          <th>Years Of Experience</th>
          <th>Phone No</th>
          <th>BMDC</th>
          <th>Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {doctorList.map(doctor=>(
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.degree}</td>
              <td>{doctor.yearsOfExperience}</td>
              <td>{doctor.phoneNo}</td>
              <td>{doctor.bmdc}</td>
              <td>{doctor.fees}</td>
              <td>
                <span onClick={()=>handleDelete(doctor)}><DeleteIcon/></span>
                <span onClick={() => { setCurrentId(doctor.id) }}><EditIcon/></span>
                 
              </td>

              
            </tr>
          ))}
        
      
      </tbody>
            </table>
         </div>
        </div>
        
    )
}

export default DoctorList;