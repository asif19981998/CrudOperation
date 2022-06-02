
using AmarDaktar.BLL.Contracts;
using AmarDaktar.Models.EntityModels;
using AmarDaktar.Models.ViewModel.Doctor;
using AmarDaktar.Repositories.Abastractions.IUnitWork;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AmarDaktarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : AppController
    {
        private IDoctorService _service;
        private IMapper _mapper;
        private readonly IWebHostEnvironment _hostEnvironment;
        public DoctorController(IDoctorService iService,IUnitOfWork iUnitOfWork,IMapper mapper, IWebHostEnvironment hostEnvironment) :base(iUnitOfWork)
        {
            _service = iService;
            _mapper = mapper;
            this._hostEnvironment = hostEnvironment;

        }
      
        [HttpGet]
        public async  Task<ICollection<Doctor>> GetDoctor()
        {
            var data = await _service.GetAllAsync();
            return data;
        }

       


        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DoctorController>
        [HttpPost]
        [Route("doctorAdd")]
        public async Task<ActionResult<Doctor>> DoctorAdd(DoctorCreateVM doctorModel)
        {
          var doctor = _mapper.Map<Doctor>(doctorModel);
         
          bool  isSubmitterd = _service.Add(doctor);
            if (isSubmitterd)
              return  StatusCode(200);
          return Ok("Not Saved");
        }

        // PUT api/<DoctorController>/5
       [HttpPut]
       [Route("Update")]
       public async Task<IActionResult> Update(Doctor doctor)
        {
            try
            {
                var result = await _service.UpdateAsync(doctor);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        // DELETE api/<DoctorController>/5
        [HttpPost]
        [Route("Delete")]
        public  bool Delete(Doctor doctor)
        {
            try
            {
                var result =  _service.Remove(doctor);
                return result;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        [NonAction]
      public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
    
    }
}
