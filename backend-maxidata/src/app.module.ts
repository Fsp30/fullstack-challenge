import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeProfessionalModule } from './type-professional/type-professional.module';

@Module({
  imports: [TypeProfessionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
