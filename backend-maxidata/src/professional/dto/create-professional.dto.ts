import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional, IsBoolean, IsDefined } from "class-validator";

export class CreateProfessionalDto {
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        nome: string
        
        @IsOptional()
        @IsString()
        @IsDefined()
        telephone?:string
        
        @IsOptional()
        @IsEmail()
        @IsDefined()
        email?:string
        
        @IsBoolean()
        @IsDefined()
        situation: boolean
        
        @IsInt()
        @IsDefined()
        typeOfProfessionalId:number
}
