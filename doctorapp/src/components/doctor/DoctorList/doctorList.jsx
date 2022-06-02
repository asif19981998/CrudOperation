import React, { Component, useEffect, useState } from 'react';


import { useToasts } from "react-toast-notifications";

import * as doctorService from "../../../services/doctorService";
const DoctorList = () => {
    const { addToast } = useToasts();
    const [doctorList,setDoctorList]=useState([]);

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
                <button onClick={()=>handleDelete(doctor)}>Delete</button>
                <button onClick={()=>handleUpdate(doctor)}>Update</button>
            </td>

            
          </tr>
        ))}
      
     
    </tbody>
  </table>
    )
}

export default DoctorList;