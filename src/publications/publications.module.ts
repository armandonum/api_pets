import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { Publication } from './entities/publication.entity';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication]),
    ImagesModule, // Importa el módulo de imágenes
  ],
  providers: [PublicationsService],
  controllers: [PublicationsController],
})
export class PublicationsModule {}
