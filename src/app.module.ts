import { Module } from '@nestjs/common';
import { RootController } from './app.controller';
import { CarsModule } from './cars/cars.module';


@Module({
  imports: [CarsModule],
  controllers: [RootController],
  providers: [],
  exports: [],
})
export class AppModule {}
