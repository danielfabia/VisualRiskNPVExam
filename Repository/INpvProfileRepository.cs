using Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public interface INpvProfileRepository
    {
        IEnumerable<NpvProfile> GetAll();
        IEnumerable<NpvProfile> GetById(int id);
        NpvProfile Add(NpvProfile newProfile);
        NpvProfile Update(NpvProfile newProfile);
    }
}
