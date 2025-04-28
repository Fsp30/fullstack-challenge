import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeProfessionalModule } from './type-professional/type-professional.module';
import { ProfessionalModule } from './professional/professional.module';
import 'reflect-metadata';

@Module({
  imports: [TypeProfessionalModule, ProfessionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
