import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Esta configuración filtra sólo la data que estamos esperando en nuestras validaciones
      forbidNonWhitelisted: true,
    })
  )
  await app.listen(3000);
}
bootstrap();
