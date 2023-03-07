import { Controller, Get } from '@nestjs/common';

@Controller('/')//Controlador para la ruta root
export class RootController {
    @Get()//Método get sin parametros
    getRoot(){//Ejecuta métoro getRoot y regresa un Hola Mundo
        return 'Hola mundo'
    }
}