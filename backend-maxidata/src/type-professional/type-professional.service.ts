import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { PrismaClient, TypeProfessional } from '@generated/prisma'
import { ResourceNotFoundException } from '@/shared/errors/ResourceNotFoundException';

@Injectable()
export class TypeProfessionalService {

  constructor(private prisma: PrismaClient) { }

  async create(input: CreateTypeProfessionalDto) {
    const dto = plainToInstance(CreateTypeProfessionalDto, input)

    await validateOrReject(dto, {
      whitelist: true,
      forbidNonWhitelisted: true
    })
    return this.prisma.typeProfessional.create({ data: dto })
  }

  async findAll():Promise<TypeProfessional[]> {
    return await this.prisma.typeProfessional.findMany()
  }

  async findOne(id: number): Promise<TypeProfessional> {
    const typeProfessional = await this.prisma.typeProfessional.findUnique({ where: { id } })
    if (!typeProfessional) {
      throw new ResourceNotFoundException("Tipo de Profissional")
    }
    return typeProfessional
  }

  async update(id: number, input: UpdateTypeProfessionalDto): Promise<TypeProfessional> {
    await this.findOne(id)
    const dto = plainToInstance(UpdateTypeProfessionalDto, input)

    await validateOrReject(dto, {
      whitelist: true,
      forbidNonWhitelisted: true
    })
    return this.prisma.typeProfessional.update({
      where: { id },
      data: dto
    })
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prisma.typeProfessional.delete({ where: { id } })
  }
}
