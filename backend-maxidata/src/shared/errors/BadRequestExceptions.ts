import { BadRequestException as NestBadRequestException } from "@nestjs/common";

export class BadRequestException extends NestBadRequestException {
        constructor(message: string, errors: any = null){
                super(message, errors)
        }
}