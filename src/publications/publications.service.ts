import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from './entities/publication.entity';
import { ImagesService } from '../images/images.service';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
    private readonly imagesService: ImagesService, // Inyectar el servicio de imágenes
  ) {}

  // Crear una publicación con imágenes
  async create(data: {
    title: string;
    description: string;
    breed: string;
    age: number;
    sex: string;
    city: string;
    enabled?: boolean;
    images: string[]; // Base64 de las imágenes
  }): Promise<Publication> {
    const { images, ...publicationData } = data;

    // Crear la publicación
    const publication = this.publicationRepository.create(publicationData);
    const savedPublication = await this.publicationRepository.save(publication);

    // Guardar las imágenes asociadas
    if (images && images.length > 0) {
      await this.imagesService.saveImages(images, savedPublication.id);
    }

    return savedPublication;
  }

  // Listar todas las publicaciones activas
  async findAll(): Promise<Publication[]> {
    return await this.publicationRepository.find({
      where: { enabled: true }, // Solo publicaciones habilitadas
      relations: ['images'], // Incluir las imágenes relacionadas
    });
  }


  // Obtener una publicación por ID (incluyendo sus imágenes)
  async findOne(id: string): Promise<Publication> {
    const publication = await this.publicationRepository.findOne({
      where: { id },
      relations: ['images'], // Incluir imágenes relacionadas
    });

    if (!publication) {
      throw new NotFoundException(`Publication with ID ${id} not found`);
    }

    return publication;
  }

  // Actualizar una publicación
  async update(id: string, data: Partial<Publication>): Promise<Publication> {
    const publication = await this.findOne(id);

    Object.assign(publication, data);
    return this.publicationRepository.save(publication);
  }

  // Eliminar una publicación (lógico)
  async delete(id: string): Promise<void> {
    const publication = await this.findOne(id);

    publication.enabled = false; // Marcar como deshabilitada
    await this.publicationRepository.save(publication);
  }
}
