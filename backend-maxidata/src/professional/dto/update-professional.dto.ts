import { PartialType } from '@nestjs/swagger';
import { CreateProfessionalDto } from './create-professional.dto';
import { IsInt, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfessionalDto extends PartialType(CreateProfessionalDto) {
        @ApiProperty({ example: 1 })
        @IsInt()
        @IsDefined()
        typeProfessionalId: number
}
