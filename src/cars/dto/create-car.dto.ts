import { IsString } from 'class-validator';

// Data Transfer Object o DTO es utilizado para manejar el formato que nosotros queremos recibir en
// las request, por ejemplo los bodys, utilizamos librerías externas para ayudarnos a validar 
// de forma más eficaz nuestra clase DTO, por ejemplo Class Validator para utilizar los decoradores
// que expone como @IsString() que valida que la información sea de tipo string 
export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}
