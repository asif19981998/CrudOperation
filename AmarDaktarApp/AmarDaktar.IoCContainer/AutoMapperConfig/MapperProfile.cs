using AmarDaktar.Models.EntityModels;
using AmarDaktar.Models.ViewModel.Doctor;
using AutoMapper;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.IoCContainer.AutoMapperConfig
{
    public class MapperProfile:Profile
    {
        public MapperProfile()
        {
            CreateMap<DoctorCreateVM, Doctor>();
            CreateMap<Doctor, DoctorCreateVM>();
           
            
        }
    }
}
