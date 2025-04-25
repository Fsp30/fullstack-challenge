import { Test, TestingModule } from '@nestjs/testing';
import { TypeProfessionalController } from './type-professional.controller';
import { TypeProfessionalService } from './type-professional.service';

describe('TypeProfessionalController', () => {
  let controller: TypeProfessionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeProfessionalController],
      providers: [TypeProfessionalService],
    }).compile();

    controller = module.get<TypeProfessionalController>(TypeProfessionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
