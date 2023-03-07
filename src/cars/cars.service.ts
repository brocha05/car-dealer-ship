import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from "uuid";

@Injectable()//Este decorador nos permite inyectar esta clase como dependencia en otras clases
export class CarsService {//Los servicios alojan toda la lógica de negocios.
  private cars: Car[] = [//Simulando nuestra data
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

  getAll() {//Método get all de la clase, regresa todo el array cars
    return this.cars;
  }

  getCarById(id: string) {//Método para obtener un carro por su id con manejo de excepciones
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`No se encontró el auto con id: ${id}`);//Si no lo encuentra
      //Utilizamos una excepción ya creada en Nest que además nos permite modificar el mensaje.

    return car;
  }
}
