﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvProfileModel
    /// </summary>
    public class NpvProfileModel
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public NpvProfileModel()
        {
            this.Profiles = new List<ProfileModel>();
        }

        /// <summary>
        /// Initial Cost
        /// </summary>
        [Required]
        public decimal InitialCost { get; set; }
        /// <summary>
        /// List of Cash Flows
        /// </summary>
        [Required]
        public decimal[] Values { get; set; }
        /// <summary>
        /// Lower Bound Discount Rate
        /// </summary>
        [Required]
        public float LowerBoundRate { get; set; }
        /// <summary>
        /// Upper Bound Discount Rate
        /// </summary>
        [Required]
        public float UpperBoundRate { get; set; }
        /// <summary>
        /// Discount Rate increment
        /// </summary>
        [Required]
        public float RateIncrement { get; set; }
        /// <summary>
        /// List of NPV Profiles
        /// </summary>
        public List<ProfileModel> Profiles { get; set; }
    }
}
