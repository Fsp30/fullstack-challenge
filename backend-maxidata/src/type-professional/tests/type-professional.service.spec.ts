import { TypeProfessionalService } from '../type-professional.service'
import { PrismaService } from '../../shared/database/prisma.service';
import { jest } from '@jest/globals'

const prisma = new PrismaService()

describe('TypeProfessionalService', () => {
  let service: TypeProfessionalService

  beforeEach(() => {
    service = new TypeProfessionalService(prisma)
  })

  afterEach(async () => {
    await prisma.typeProfessional.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should create a new TypeProfessional', async () => {
    const data = {
      describe: 'Professor',
      situation: true
    }
    const result = await service.create(data)

    expect(result).toMatchObject({
      id: expect.any(Number),
      describe: data.describe,
      situation: data.situation,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    })
  })
  it('should throw an error if describe is missing', async () => {
        const data = {
          situation: true,
        }
        await expect(service.create(data as any)).rejects.toThrowError()
  })

  it('should return all type professionals', async ()=>{
    await service.create({describe: 'Motorista', situation: true})
    await service.create({describe: 'Carteiro', situation: false})
    await service.create({describe: 'Zelador', situation: true})
    const page = 1
    const limit = 2
    const result = await service.findAll(page, limit)

    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.map(r => r.describe)).toEqual(
      expect.arrayContaining(['Motorista', 'Carteiro', 'Zelador'])
    )
  })
  it('return a TypeProfessional by id', async () => {
    const created = await service.create({
      describe: 'Psicólogo',
      situation: true,
    })
  
    const found = await service.findOne(created.id)
    expect(found).toBeDefined();
    expect(found.id).toBe(created.id)
    expect(found.describe).toBe('Psicólogo')
  });
  
  it('should throw error if TypeProfessional is not found', async () => {
    await expect(service.findOne(99999)).rejects.toThrowError('Tipo de Profissional não encontrado.')
  });
  it('should update an existing TypeProfessional', async () => {
    const created = await service.create({
      describe: 'Dentista',
      situation: true,
    })
    const updateData = {
      describe: 'Dentista atualizado',
      situation: false,
    }
  
    const updated = await service.update(created.id, updateData)
    expect(updated).toBeDefined();
    expect(updated.id).toBe(created.id)
    expect(updated.describe).toBe(updateData.describe)
    expect(updated.situation).toBe(updateData.situation)
    expect(updated.updatedAt).toBeInstanceOf(Date)
  })

  it('should throw error when updating non-existing TypeProfessional', async () => {
    const updateData = {
      describe: 'Não existe',
      situation: true,
    }
    await expect(service.findOne(99999)).rejects.toThrowError('Tipo de Profissional não encontrado.')
  })

  it('Deleted a TypeProfessional by Id', async () =>{
    const created = await service.create({
      describe: 'Desenvolvedor',
      situation: true
    })
    const result = await service.remove(created.id)
    await expect(service.findOne(created.id)).rejects.toThrow('Tipo de Profissional não encontrado.') 
  })
  it('should throw error when removing non-existing TypeProfessional', async () => {
    await expect(service.remove(99999)).rejects.toThrow('Tipo de Profissional não encontrado.')
  })
  
})


