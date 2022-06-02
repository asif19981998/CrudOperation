using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Models.ViewModel.Doctor
{
    public class DoctorCreateVM
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public string Degree { get; set; }

        public double YearsOfExperience { get; set; }
        public string BMDC { get; set; }
        public double Fees { get; set; }
        public string PhoneNo { get; set; }

        public bool IsDeleted { get; set; }


        public long? DeletedById { get; set; }
        public DateTime? DeletedOn { get; set; }
        public bool IsApproved { get; set; }


    }
}
