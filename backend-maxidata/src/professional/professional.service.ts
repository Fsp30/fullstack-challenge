import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { PrismaClient, Professional } from '../../generated/prisma'
import { ResourceNotFoundException } from '../shared/errors/ResourceNotFoundException';

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

  async findAll():Promise<Professional[]> {
    return await this.prisma.professional.findMany()
  }

  async findOne(id: number):Promise<Professional> {
    const professional = await this.prisma.professional.findUnique({where: {id}})
    if(!professional){
      throw new ResourceNotFoundException('Profissional')
    }
    return professional
  }

  async update(id: number, input: UpdateProfessionalDto):Promise<Professional>{
    const professional = await this.prisma.professional.findUnique({where: {id}})
    
    if(!professional) throw new ResourceNotFoundException('Profissional')

    const dto = plainToInstance(UpdateProfessionalDto, input)
    await validateOrReject(dto,{
      whitelist: true,
      forbidNonWhitelisted: true
    })
    return this.prisma.professional.update({
      where: {id},
      data: dto
    })
    
    }

  async remove(id: number): Promise<void> {
    const professional = this.prisma.professional.findUnique({where: {id}})
    if(!professional) throw new ResourceNotFoundException('Profissional')

    await this.prisma.professional.delete({where: {id}})
  }
}
