import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Maxidata_backendAPI')
    .setDescription('Documentation API of Professionals and TypeProfessionals')
    .setVersion('1.0.0')
    .addTag('Professional-TypeProfessional')
    .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('docs', app, document)
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
