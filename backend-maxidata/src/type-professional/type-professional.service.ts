import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { PrismaClient, TypeProfessional } from '@generated/prisma'

@Injectable()
export class TypeProfessionalService {

  constructor(private prisma: PrismaClient){}

  async create(input: CreateTypeProfessionalDto){
    const dto = plainToInstance(CreateTypeProfessionalDto, input)

    await validateOrReject(dto,{
      whitelist: true,
      forbidNonWhitelisted: true
    })
    return this.prisma.typeProfessional.create({data:dto})
  }

  async findAll() {
    return await this.prisma.typeProfessional.findMany()
  }

  async findOne(id: number): Promise<TypeProfessional> {
    const typeProfessional = await this.prisma.typeProfessional.findUnique({where: {id}})
    if(!typeProfessional){
      throw new Error('Tipo de profissionl não encontrado')
    }
    return typeProfessional
  }

  update(id: number, updateTypeProfessionalDto: UpdateTypeProfessionalDto) {
    return `This action updates a #${id} typeProfessional`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeProfessional`;
  }
}
