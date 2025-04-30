import { Module } from '@nestjs/common';
import { TypeProfessionalService } from './type-professional.service';
import { TypeProfessionalController } from './type-professional.controller';
import { PrismaModule } from '../shared/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TypeProfessionalController],
  providers: [TypeProfessionalService],
})
export class TypeProfessionalModule {}
