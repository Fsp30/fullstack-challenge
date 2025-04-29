import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";

interface ValidationErrorItem{
        field: string
        message: string
}

export class ValidationException extends BadRequestException{
        constructor(public validationErrors: ValidationError[]){
                super({
                        statusCode:400,
                        message: 'Validation failed',
                        errors: ValidationException.buildErrors(validationErrors)
                })
        }
        private static buildErrors(validationErrors: ValidationError[]): ValidationErrorItem[] {
                return validationErrors.flatMap(error =>
                  Object.values(error.constraints || {}).map(message => ({
                    field: error.property,
                    message,
                  }))
                )
              }
}