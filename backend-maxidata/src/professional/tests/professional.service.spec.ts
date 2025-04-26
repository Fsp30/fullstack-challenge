import { ProfessionalService } from '../professional.service'
import { PrismaClient } from '@generated/prisma'
import { jest } from '@jest/globals'

const prisma = new PrismaClient()

describe('ProfessionalService', () => {
  let service: ProfessionalService

  beforeEach(() => {
    service = new ProfessionalService(prisma)
  })

  afterEach(async () => {
    await prisma.professional.deleteMany()
    await prisma.typeProfessional.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should create a new Professional', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: {
        describe: 'Advogado',
        situation: true,
      },
    })

    const data = {
      nome: 'João Silva',
      telephone: '11999999999',
      email: 'joao@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id,
    }

    const result = await service.create(data)

    expect(result).toMatchObject({
      id: expect.any(Number),
      nome: data.nome,
      telephone: data.telephone,
      email: data.email,
      situation: data.situation,
      typeOfProfessionalId: data.typeOfProfessionalId,
      createAt: expect.any(Date),
      updateAt: expect.any(Date),
    })
  })
  
  it('should throw an error if typeOfProfessionalId does not exist', async () => {
    const data = {
      nome: 'Maria Oliveira',
      telephone: '11888888888',
      email: 'maria@example.com',
      situation: true,
      typeOfProfessionalId: 99999, 
    }
    await expect(service.create(data)).rejects.toThrowError('Tipo de profissional não encontrado')
  })

  it('should throw an error if required fields are missing', async () => {
    const data = {
      telephone: '11777777777',
      email: 'pedro@example.com',
      situation: true,
      typeOfProfessionalId: 1,
    }

    await expect(service.create(data as any)).rejects.toThrow()
  })
})
