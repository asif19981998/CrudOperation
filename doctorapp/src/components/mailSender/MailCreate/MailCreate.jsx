import React, { useState } from 'react'
import { useToasts } from "react-toast-notifications";
import MailSender from '../MailSenderModel'
import * as mailSenderService from "../../../services/mailSenderService";
 




function MailCreate() {
    const { addToast } = useToasts();
    const [sendMail,setSendMail]=useState(new MailSender())
  
    const handleResetForm=()=>{
        setSendMail(new MailSender());
    }

    const handleMailSend=(e)=>{
        e.preventDefault();
        mailSenderService.Add(sendMail)
        .then(res=>{
            addToast("Send successfully", {
                appearance: "success",
                autoDismiss: true
            });
            handleResetForm();
        })
        .catch(error=>{
            addToast("Unable to Send", {
                appearance: "error",
                autoDismiss: true
            });
        })

    }

    const handleInputChange = (e) => {
       
        const { name, value } = e.target;
        const fieldsValue = { [name]: value };
        
        setSendMail({ ...sendMail, ...fieldsValue });
       
        
    }

    return ( <>
    <div className='container'>
    <h2>Send e-mail </h2>

    <form>
    <div className="form-group">
        <label >Sender:</label>
        <input className="form-control" type="text" name="from" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group">
        <label >Receiver:</label>
        <input className="form-control" type="text" name="to" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group">
        <label >Subject:</label>
        <input className="form-control" type="text" name="subject" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group">
        <label >Cc:</label>
        <input className="form-control" type="text" name="cc" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group">
        <label >Bcc:</label>
        <input className="form-control" type="text" name="bcc" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group">
        <label >Body:</label>
        <textarea className="form-control" type="text" name="body" value={sendMail.name} onChange={handleInputChange}/>
    </div>
    <div className="form-group" style={{marginTop:'5px'}}>
    <input  className='btn btn-success' type="button" value="Send" onClick={handleMailSend}/>
    </div>
    </form>

    </div>
        
    </>
  )
}

export default MailCreate