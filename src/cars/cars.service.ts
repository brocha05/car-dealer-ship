import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()//Este decorador nos permite inyectar esta clase como dependencia en otras clases
export class CarsService {//Los servicios alojan toda la lógica de negocios.
  private cars = [//Simulando nuestra data
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  getAll() {//Método get all de la clase, regresa todo el array cars
    return this.cars;
  }

  getCarById(id: number) {//Método para obtener un carro por su id con manejo de excepciones
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`No se encontró el auto con id: ${id}`);//Si no lo encuentra
      //Utilizamos una excepción ya creada en Nest que además nos permite modificar el mensaje.

    return car;
  }
}
