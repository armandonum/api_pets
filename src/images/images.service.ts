import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  // Guardar imágenes asociadas a una publicación
  async saveImages(imageDataArray: string[], publicationId: string): Promise<Image[]> {
    const images = imageDataArray.map((imageData) => {
      const image = this.imageRepository.create({ imageData, publication: { id: publicationId } });
      return image;
    });
    return await this.imageRepository.save(images);
  }

  // Buscar imágenes por publicación
  async findImagesByPublication(publicationId: string): Promise<Image[]> {
    return await this.imageRepository.find({ where: { publication: { id: publicationId } } });
  }

  // Eliminar imágenes por ID
  async deleteImagesByIds(imageIds: string[]): Promise<void> {
    await this.imageRepository.delete(imageIds);
  }
}
