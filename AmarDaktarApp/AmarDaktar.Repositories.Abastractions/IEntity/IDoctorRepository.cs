using AmarDaktar.Models.EntityModels;
using Base.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Repositories.Abastractions.IEntity
{
    public interface IDoctorRepository:IMainRepository<Doctor>
    {
        IEnumerable<Doctor> GetApprovedData();
        IEnumerable<Doctor> GetNotApprovedData();
    }
}
