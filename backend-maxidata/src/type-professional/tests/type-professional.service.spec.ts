import { TypeProfessionalService } from '../type-professional.service'
import { PrismaClient } from '@generated/prisma'
import { jest } from '@jest/globals'

const prisma = new PrismaClient()

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
})
