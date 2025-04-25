import { PartialType } from '@nestjs/swagger';
import { CreateTypeProfessionalDto } from './create-type-professional.dto';

export class UpdateTypeProfessionalDto extends PartialType(CreateTypeProfessionalDto) {}
