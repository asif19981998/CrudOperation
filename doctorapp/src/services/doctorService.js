import axios from "axios"
import {apiUrl} from "../config"

const doctorApiUrl = apiUrl+"doctor/"

export const GetAll=(entityModel)=>{
   
    return  axios.get(doctorApiUrl)
  }

export const Add=(entityModel)=>{
   
  return  axios.post(doctorApiUrl+"doctorAdd", entityModel)
}

export const Update=(entityModel)=>{
   
    return  axios.put(doctorApiUrl+"Update", entityModel)
  }

  export const Delete=(entityModel)=>{
   
    return  axios.post(doctorApiUrl+"Delete", entityModel)
  }

