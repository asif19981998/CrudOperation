import axios from "axios"
import {apiUrl} from "../config"

const mailSenderApiUrl = apiUrl+"mailSender/"



export const Add=(entityModel)=>{
   
  return  axios.post(mailSenderApiUrl+"sendMail", entityModel)
}

