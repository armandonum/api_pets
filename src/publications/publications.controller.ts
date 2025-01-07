import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './entities/publication.entity';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  // Crear una publicación
  @Post()
  async create(@Body() data: {
    title: string;
    description: string;
    breed: string;
    age: number;
    sex: string;
    city: string;
    enabled?: boolean;
    images: string[]; // Base64 de las imágenes
  }) {
    return await this.publicationsService.create(data);
  }

  // Listar todas las publicaciones activas
  @Get()
  async findAll() {
    return await this.publicationsService.findAll();
  }


  // Obtener una publicación por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.publicationsService.findOne(id);
  }

  // Actualizar una publicación
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Publication>) {
    return await this.publicationsService.update(id, data);
  }

  // Eliminar una publicación (lógico)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.publicationsService.delete(id);
    return { message: `Publication with ID ${id} has been disabled` };
  }
}
