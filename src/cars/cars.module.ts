import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({//Módulo Cars con su controlador y un provider que es un servicio donde se aloja la lógica de negocio.
  controllers: [CarsController],//Contorlador cars
  providers: [CarsService] //Servicio cars
})
export class CarsModule {}
