using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    /// <summary>
    /// API for calculating Present Value (PV), Net Present Value (NPV) and Net Present Value (NPV) Profile
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ComputeController : ControllerBase
    {
        private readonly IMapper mapper;

        /// <summary>
        /// Constructor
        /// </summary>
        public ComputeController(IMapper mapper)
        {
            this.mapper = mapper;
        }

        /// <summary>
        /// Compute Present Value (PV)
        /// </summary>
        /// <param name="value">Future Value</param>
        /// <param name="rate">Discount Rate (as percent)</param>
        /// <param name="period">Number of Time</param>
        /// <returns>PV value</returns>
        [HttpGet]
        [Route("pv")]
        public ActionResult PresentValue(decimal value, float rate, int period)
        {
            var pv = Financial.PresentValue(value, rate / 100, period);

            return Ok(Math.Round(pv, 4));
        }

        /// <summary>
        /// Compute Net Present Value (NPV)
        /// </summary>
        /// <param name="request"></param>
        /// <returns>NPV value</returns>
        [HttpGet]
        [Route("npv")]
        public ActionResult NetPresentValue([FromQuery]NpvRequestModel request)
        {
            var npv = Financial.NetPresentValue(request.InitialCost, request.Rate / 100, request.Values);

            return Ok(Math.Round(npv, 4));
        }

        /// <summary>
        /// Compute NPV using single cash flows at different discount rate
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("npv-profile")]
        public ActionResult NetPresentValueProfile([FromQuery]NpvProfileRequestModel model)
        {
            var npvProfiles = Financial.NetPresentValueProfiles(model.InitialCost, model.Values, 
                                                            model.LowerBoundRate, model.UpperBoundRate, 
                                                            model.RateIncrement);

            var profileModel = mapper.Map<NpvProfileModel>(model);

            npvProfiles.ToList().ForEach(p =>
            {
                profileModel.Profiles.Add(new ProfileModel { Rate = p.Rate, Npv = Math.Round(p.NetPresentValue, 4) });
            });

            return Ok(profileModel);
        }
    }
}