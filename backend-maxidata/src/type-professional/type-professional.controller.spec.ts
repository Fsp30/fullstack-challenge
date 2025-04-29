import { Test, TestingModule } from '@nestjs/testing';
import { TypeProfessionalController } from './type-professional.controller';
import { TypeProfessionalService } from './type-professional.service';
import { PrismaService } from '../shared/database/prisma.service';


describe('TypeProfessionalController', () => {
  let controller: TypeProfessionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeProfessionalController],
      providers: [TypeProfessionalService, PrismaService],
    }).compile();

    controller = module.get<TypeProfessionalController>(TypeProfessionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
