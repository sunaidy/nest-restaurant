import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'maxLengthArray', async: false })
export class MaxLengthArrayValidator implements ValidatorConstraintInterface {
  validate(arr: any[], args: ValidationArguments) {
    const [errorMessage, maxLength] = args.constraints;
    return Array.isArray(arr) && arr.length <= maxLength;
  }

  defaultMessage(args: ValidationArguments) {
    const [errorMessage] = args.constraints;
    return errorMessage;
  }
}