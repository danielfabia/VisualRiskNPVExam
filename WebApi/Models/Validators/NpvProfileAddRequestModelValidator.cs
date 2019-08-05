using FluentValidation;
using Repository;
using System;
using WebApi.Models;

namespace WebApi.Models.Validators
{
    public class NpvProfileAddRequestModelValidator : AbstractValidator<NpvProfileAddRequestModel>
    {
        private readonly IServiceProvider serviceProvider;

        public NpvProfileAddRequestModelValidator(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider; 

            RuleFor(x => x.RateIncrement)
                .GreaterThan(0F)
                .WithMessage("RateIncrement must be greater than zero");

            RuleFor(x => x.LowerBoundRate)
                .LessThan(x => x.UpperBoundRate)
                .WithMessage("LowerBoundRate must be less than UpperBoundRate");

            RuleFor(x => x.UpperBoundRate)
                .GreaterThan(x => x.LowerBoundRate)
                .WithMessage("UpperBoundRate must be greater than LowerBoundRate");

            var repository = (INpvProfileRepository)serviceProvider.GetService(typeof(INpvProfileRepository));
            RuleFor(x => x.Name)
                .SetValidator(new ProfileNameValidator(repository));
        }
    }
}