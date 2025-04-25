import { Injectable } from '@nestjs/common';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { PrismaClient } from '@generated/prisma'

@Injectable()
export class TypeProfessionalService {

  constructor(private prisma: PrismaClient){}

  async create(data: {describe: string, situation: boolean}) {
    return this.prisma.typeProfessional.create({
      data
    })
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
