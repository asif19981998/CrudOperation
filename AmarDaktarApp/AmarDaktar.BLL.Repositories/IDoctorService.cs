using AmarDaktar.Models.EntityModels;
using Base.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.BLL.Contracts

{
    public interface IDoctorService:IMainService<Doctor>
    {
 IEnumerable<Doctor> GetApprovedData();
IEnumerable<Doctor> GetNotApprovedData();

    }
}
