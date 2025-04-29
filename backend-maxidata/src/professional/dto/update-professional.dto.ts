import { PartialType } from '@nestjs/swagger';
import { CreateProfessionalDto } from './create-professional.dto';
import { IsInt, IsDefined } from 'class-validator';

export class UpdateProfessionalDto extends PartialType(CreateProfessionalDto) {
        @IsInt()
        @IsDefined()
        typeProfessionalId: number
}
