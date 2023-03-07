import { Module } from '@nestjs/common';
import { RootController } from './app.controller';
import { CarsModule } from './cars/cars.module';


@Module({//Módulo principal con sus respectivos módulos hijos y controladores 
  imports: [CarsModule],//Modulo hijo CarsModule
  controllers: [RootController],//Controlador root de la aplicación
  providers: [],
  exports: [],
})
export class AppModule {}
