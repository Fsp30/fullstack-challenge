import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional, IsBoolean, IsDefined } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessionalDto {
        @ApiProperty({ example: 'João Silva' })
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        nome: string
        
        @ApiProperty({ example: '11999999999' })
        @IsOptional()
        @IsString()
        @IsDefined()
        telephone?:string
        
        @ApiProperty({ example: 'joao@example.com' })
        @IsOptional()
        @IsEmail()
        @IsDefined()
        email?:string
        
        @ApiProperty({ example: true })
        @IsBoolean()
        @IsDefined()
        situation: boolean
        
        @ApiProperty({ example: 1 })
        @IsInt()
        @IsDefined()
        typeOfProfessionalId:number
}
