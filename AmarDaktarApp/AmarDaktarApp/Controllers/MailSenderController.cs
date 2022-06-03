using AmarDaktar.Models.EntityModels;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;

namespace AmarDaktarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailSenderController : ControllerBase
    {
        [HttpPost]
        [Route("sendMail")]
        public string SendMail(MailSender model)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(model.From, model.From));
            message.To.Add(new MailboxAddress(model.To, model.To));
            message.Subject = model.Subject;
            message.Body = new TextPart("plain")
            {
                Text = model.Body
            };
            if(model.Cc.Length>0) message.Cc.Add(new MailboxAddress(model.Cc, model.Cc));

            if (model.Bcc.Length > 0) message.Bcc.Add(new MailboxAddress(model.Bcc, model.Bcc));

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("zoombie348@gmail.com", "Z1234bie");
                client.Send(message);
                client.Disconnect(true);
            }

            return "success";
        }
    }
}
