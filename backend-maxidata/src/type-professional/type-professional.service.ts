import { Injectable } from '@nestjs/common';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';

@Injectable()
export class TypeProfessionalService {
  create(createTypeProfessionalDto: CreateTypeProfessionalDto) {
    return 'This action adds a new typeProfessional';
  }

  findAll() {
    return `This action returns all typeProfessional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeProfessional`;
  }

  update(id: number, updateTypeProfessionalDto: UpdateTypeProfessionalDto) {
    return `This action updates a #${id} typeProfessional`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeProfessional`;
  }
}
