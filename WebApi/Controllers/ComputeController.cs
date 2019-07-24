using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputeController : ControllerBase
    {
        [HttpGet]
        [Route("pv")]
        public ActionResult PresentValue(decimal value, float rate, int period)
        {
            var pv = Financial.PresentValue(value, rate / 100, period);

            return Ok(Math.Round(pv, 4));
        }

        [HttpGet]
        [Route("npv")]
        public ActionResult NetPresentValue([FromQuery]NetPresentValueRequestModel request)
        {
            var npv = Financial.NetPresentValue(request.InitialValue, request.Rate / 100, request.Values);

            return Ok(Math.Round(npv, 4));
        }

        [HttpGet]
        [Route("npv-profile")]
        public ActionResult NetPresentValueProfile([FromQuery]NetPresentValueProfileModel model)
        {
            var npvProfiles = Financial.NetPresentValueProfiles(model.InitialValue, model.Values, 
                                                            model.LowerBoundRate, model.UpperBoundRate, 
                                                            model.RateIncrement);

            npvProfiles.ToList().ForEach(p =>
            {
                model.Profiles.Add(new ProfileModel { Rate = p.Rate, Npv = Math.Round(p.NetPresentValue, 4) });
            });

            return Ok(model);
        }
    }
}