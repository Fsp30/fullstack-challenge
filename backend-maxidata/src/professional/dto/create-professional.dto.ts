import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional, IsBoolean } from "class-validator";

export class CreateProfessionalDto {
        @IsString()
        @IsNotEmpty()
        name: string

        @IsOptional()
        @IsString()
        telephone?:string

        @IsOptional()
        @IsEmail()
        email?:string

        @IsBoolean()
        situation: boolean

        @IsInt()
        typeOfProfessionalId:number
}
