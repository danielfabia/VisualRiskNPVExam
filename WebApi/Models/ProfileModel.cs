using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// ProfileModel
    /// </summary>
    public class ProfileModel
    {
        /// <summary>
        /// Discount Rate
        /// </summary>
        public float Rate { get; set; }
        /// <summary>
        /// Net Present Value
        /// </summary>
        public decimal Npv { get; set; }
    }
}
