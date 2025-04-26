import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { PrismaClient, Professional } from '@generated/prisma'
import { ResourceNotFoundException } from '@/shared/errors/ResourceNotFoundException';

@Injectable()
export class ProfessionalService {
  constructor(private prisma:PrismaClient){}

  async create(input: CreateProfessionalDto){
    const dto = plainToInstance(CreateProfessionalDto, input)

    await validateOrReject(dto,{
      whitelist:true,
      forbidNonWhitelisted: true
    })
    const typeProfessional = await this.prisma.typeProfessional.findUnique({
      where: {id: Number(dto.typeOfProfessionalId)}
    })
    if(!typeProfessional){
      throw new ResourceNotFoundException("Tipo de Profissional")
    }
    return this.prisma.professional.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        telephone: dto.telephone,
        typeProfessionalId: dto.typeOfProfessionalId,
        situation: dto.situation,
      },
    })
  }

  findAll() {
    return `This action returns all professional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professional`;
  }

  update(id: number, updateProfessionalDto: UpdateProfessionalDto) {
    return `This action updates a #${id} professional`;
  }

  remove(id: number) {
    return `This action removes a #${id} professional`;
  }
}
