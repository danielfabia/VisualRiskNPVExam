﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NetPresentValueProfileModel
    /// </summary>
    public class NpvProfileRequestModel
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public NpvProfileRequestModel()
        {
        }

        /// <summary>
        /// Initial Cost
        /// </summary>
        public decimal InitialCost { get; set; }
        /// <summary>
        /// List of Cash Flows
        /// </summary>
        public decimal[] Values { get; set; }
        /// <summary>
        /// Lower Bound Discount Rate
        /// </summary>
        public float LowerBoundRate { get; set; }
        /// <summary>
        /// Upper Bound Discount Rate
        /// </summary>
        public float UpperBoundRate { get; set; }
        /// <summary>
        /// Discount Rate increment
        /// </summary>
        public float RateIncrement { get; set; }
    }
}
