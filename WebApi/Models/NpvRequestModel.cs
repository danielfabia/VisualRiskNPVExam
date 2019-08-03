using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvRequestModel
    /// </summary>
    public class NpvRequestModel
    {
        /// <summary>
        /// Initial Cost
        /// </summary>
        public decimal InitialCost { get; set; }
        /// <summary>
        /// Discount Rate (as percent)
        /// </summary>
        public float Rate { get; set; }
        /// <summary>
        /// List of Cash Flows
        /// </summary>
        public decimal[] Values { get; set; }
    }
}
