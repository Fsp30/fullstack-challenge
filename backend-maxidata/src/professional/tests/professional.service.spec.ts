import { ProfessionalService } from '../professional.service'
import { PrismaService } from '../../shared/database/prisma.service'

const prisma = new PrismaService()

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
      email: data.email,
      telephone: data.telephone,
      typeProfessionalId: expect.any(Number),
      situation: data.situation,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      typeProfessional: {
        id: data.typeOfProfessionalId,
        describe: expect.any(String),
        situation: expect.any(Boolean),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }
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
    await expect(service.create(data)).rejects.toThrowError('Tipo de Profissional não encontrado.')
  })

  it('should throw an error if required fields are missing', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: { describe: 'Médico', situation: true }
    })
    const data = {
      telephone: '11777777777',
      email: 'pedro@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id,
    }

    await expect(service.create(data as any)).rejects.toThrowError()
  })

  it('should return all professionals', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: { describe: 'Atendente', situation: true }
    })
    await service.create({
      nome: 'Clyde Drexler',
      telephone: '14994596999',
      email: 'Clyde@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id
    })
    await service.create({
      nome: 'Post Malone',
      telephone: '32987654321',
      email: 'Stoney@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id
    })

    const result = await service.findAll()

    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.map(response => response.nome)).toEqual(
      expect.arrayContaining(['Clyde Drexler', 'Post Malone'])
    )
  })
  it('return a professional by id', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: { describe: 'Artista', situation: true }
    })

    const create = await service.create({
      nome: 'Post Malone',
      telephone: '32987654321',
      email: 'Stoney@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id
    })

    const found = await service.findOne(create.id)
    expect(found).toBeDefined()
    expect(found.id).toBe(create.id)
    expect(found.nome).toBe('Post Malone')
    expect(found.telephone).toBe('32987654321')
    expect(found.email).toBe('Stoney@example.com')
  })
  it('should throw an error if professional is not found', async () => {
    await expect(service.findOne(99999)).rejects.toThrow('Profissional não encontrado.')
  })

  it('should return all professionals of a specific type', async () => {
    const typeA = await prisma.typeProfessional.create({
      data: { describe: 'Psicólogo', situation: true },
    })
    const typeB = await prisma.typeProfessional.create({
      data: { describe: 'Fisioterapeuta', situation: true },
    })

    await service.create({
      nome: 'Laura Mendes',
      telephone: '11912345678',
      email: 'laura@example.com',
      situation: true,
      typeOfProfessionalId: typeA.id,
    })

    await service.create({
      nome: 'João Pedro',
      telephone: '11987654321',
      email: 'joaop@example.com',
      situation: true,
      typeOfProfessionalId: typeA.id,
    })

    await service.create({
      nome: 'Carlos Eduardo',
      telephone: '11955556666',
      email: 'carlos@example.com',
      situation: true,
      typeOfProfessionalId: typeB.id,
    })

    const result = await service.findByType(typeA.id)
    expect(result).toHaveLength(2)
    expect(result.map(p => p.nome)).toEqual(
      expect.arrayContaining(['Laura Mendes', 'João Pedro'])
    )
  })

  it('should throw an error if type of professional does not exist (findByType)', async () => {
    await expect(service.findByType(9999)).rejects.toThrow('Tipo de Profissional não encontrado.')
  })


  it('should update a professional', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: { describe: 'Designer', situation: true },
    })

    const created = await service.create({
      nome: 'Ana Clara',
      telephone: '11999998888',
      email: 'ana@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id,
    })

    const updateData = {
      nome: 'Ana Beatriz',
      telephone: '11999997777',
      email: 'anab@example.com',
      situation: false,
      typeProfessionalId: typeProfessional.id,
    }
    const updated = await service.update(created.id, updateData)

    expect(updated.nome).toBe('Ana Beatriz')
    expect(updated.telephone).toBe('11999997777')
    expect(updated.email).toBe('anab@example.com')
    expect(updated.situation).toBe(false)
  })

  it('should remove a professional', async () => {
    const typeProfessional = await prisma.typeProfessional.create({
      data: { describe: 'Mecânico', situation: true },
    })

    const created = await service.create({
      nome: 'Carlos Souza',
      telephone: '11888887777',
      email: 'carlos@example.com',
      situation: true,
      typeOfProfessionalId: typeProfessional.id,
    })

    await service.remove(created.id)

    await expect(service.findOne(created.id)).rejects.toThrowError('Profissional não encontrado.')
  })

})
