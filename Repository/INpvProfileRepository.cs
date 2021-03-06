﻿using Data.Entities;
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
        NpvProfile GetById(int id);
        NpvProfile Add(NpvProfile newProfile);
        NpvProfile Update(NpvProfile newProfile);

        /////
        // Async methods

        Task<IEnumerable<NpvProfile>> GetAllAsync();
        Task<NpvProfile> GetByIdAsync(int id);
        Task<NpvProfile> AddAsync(NpvProfile newProfile);
        Task<NpvProfile> UpdateAsync(NpvProfile newProfile);
        Task<bool> IsProfileNameExists(string newProfileName);
    }
}
