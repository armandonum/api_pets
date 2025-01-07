import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images') // El prefijo será '/images'
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // Endpoint básico para obtener imágenes por publicación
  @Get('publication/:id')
  async findImagesByPublication(@Param('id') publicationId: string) {
    return await this.imagesService.findImagesByPublication(publicationId);
  }
}
