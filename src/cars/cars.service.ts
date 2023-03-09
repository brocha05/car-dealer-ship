import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable() //Este decorador nos permite inyectar esta clase como dependencia en otras clases
export class CarsService {
  //Los servicios alojan toda la lógica de negocios.
  private cars: Car[] = [
    //Simulando nuestra data
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  getAll() {
    //Método get all de la clase, regresa todo el array cars
    return this.cars;
  }

  getCarById(id: string) {
    //Método para obtener un carro por su id con manejo de excepciones
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`No se encontró el auto con id: ${id}`); //Si no lo encuentra
    //Utilizamos una excepción ya creada en Nest que además nos permite modificar el mensaje.

    return car;
  }

  createCarDto(createCarDto: CreateCarDto) {
    let newCar: Car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };

    this.cars.push(newCar);
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);
    console.log(carDB);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        console.log(carDB, 'entro');
        return carDB;
      }
      return car;
    });
  }

  deleteCar(id: string) {
    const car = this.getCarById(id);
    this.cars = this.cars.filter(car => car.id !== id)
  }
}
