import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { TypeProfessional } from '../../generated/prisma'
import { PrismaService } from '../shared/database/prisma.service';
import { ResourceNotFoundException } from '../shared/errors/ResourceNotFoundException';
import { BadRequestException } from '../shared/errors/BadRequestExceptions';

@Injectable()
export class TypeProfessionalService {

  constructor(private prisma: PrismaService) { }

  async create(input: CreateTypeProfessionalDto) {
    const dto = plainToInstance(CreateTypeProfessionalDto, input);
    try {
      await validateOrReject(dto, {
        whitelist: true,
        forbidNonWhitelisted: true,
      })
    } catch (errors) {
      throw new BadRequestException('Validation failed')
    }
    return this.prisma.typeProfessional.create({ data: dto });
  }
  

  async findAll(page: number, limit:number = 10):Promise<TypeProfessional[]> {
    const skip = (page - 1) * limit

    return await this.prisma.typeProfessional.findMany({
      skip: skip,
      take: limit
    })
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
