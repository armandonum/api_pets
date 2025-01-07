import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { Image } from './entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])], // Registra la entidad Image en TypeORM
  providers: [ImagesService], // Registra el servicio
  controllers: [ImagesController], // Registra el controlador
  exports: [ImagesService], // Exporta el servicio para usarlo en otros módulos
})
export class ImagesModule {}

