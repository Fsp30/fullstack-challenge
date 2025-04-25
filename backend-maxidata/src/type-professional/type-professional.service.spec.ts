import { Test, TestingModule } from '@nestjs/testing';
import { TypeProfessionalService } from './type-professional.service';

describe('TypeProfessionalService', () => {
  let service: TypeProfessionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeProfessionalService],
    }).compile();

    service = module.get<TypeProfessionalService>(TypeProfessionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
