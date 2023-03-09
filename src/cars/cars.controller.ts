import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';//Importación del servicio para inyectarlo en el constructor de la clase
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')//Controlador cars 
export class CarsController {
  constructor(private readonly carsService: CarsService) {}//Inyectando el servicio cars para acceder a las propiedades.

  @Get()//método get sin parametros del endpoint /cars
  getAllCars() {//Regresa la invocación del método getAll del servicio inyectado
    return this.carsService.getAll();
  }

  @Get(':id')//Método get con un id
  getCarById(@Param('id', ParseUUIDPipe) id: string) {//Obtiene el param con el decorador @Param()
    //y además utiliza un pipe para convertir el valor en entero 'ParseIntPipe' si no es algo que se 
    //Pueda convertir tira un error.
    return this.carsService.getCarById(id); //Ejecuta getCarById pasando el id como parametro y lo invoca
    //desde el método del servicio
  }

  @Post()//Método Post que sirve para CREAR recursos
  createCar(@Body() createCarDto: CreateCarDto) {
    return { createCarDto };
  }

  @Patch(':id')//Método Patch que sirve para actualizar datos
  updateCar(@Body() body) {
    return { body };
  }

  @Delete(':id')//Método delete que sirve para eliminar datos.
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return{
      method: 'delete',
      id
    }
  }
}
