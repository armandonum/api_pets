import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Publication } from '../../publications/entities/publication.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Identificador único de la imagen

  @Column('text')
  imageData: string; // Base64 de la imagen

  @CreateDateColumn()
  createdAt: Date; // Fecha de creación de la imagen

  @ManyToOne(() => Publication, (publication) => publication.images, { onDelete: 'CASCADE' })
  publication: Publication; // Relación con la tabla Publication
}
