using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvProfileBaseModel
    /// </summary>
    public class NpvProfileRequestBase
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public NpvProfileRequestBase()
        {
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
    }
}
