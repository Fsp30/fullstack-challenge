import { IsBoolean, IsDefined, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateTypeProfessionalDto {
        @ApiProperty({ example: 'Médico' })
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        describe: string

        @ApiProperty({ example: true })
        @IsBoolean()
        @IsDefined()
        situation: boolean
}
