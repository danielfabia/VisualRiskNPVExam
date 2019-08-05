using FluentValidation;
using WebApi.Models;

namespace WebApi.Models.Validators
{
    public class NpvProfileSavedModelValidator : AbstractValidator<NpvProfileSavedModel>
    {
        public NpvProfileSavedModelValidator()
        {
            RuleFor(x => x.RateIncrement)
                .GreaterThan(0F)
                .WithMessage("RateIncrement must be greater than zero");

            RuleFor(x => x.LowerBoundRate)
                .LessThan(x => x.UpperBoundRate)
                .WithMessage("LowerBoundRate must be less than UpperBoundRate");

            RuleFor(x => x.UpperBoundRate)
                .GreaterThan(x => x.LowerBoundRate)
                .WithMessage("UpperBoundRate must be greater than LowerBoundRate");
        }
    }
}