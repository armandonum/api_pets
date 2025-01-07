import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Image } from '../../images/entities/image.entity';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Identificador único de la publicación

  @Column()
  title: string; // Título de la publicación

  @Column('text')
  description: string; // Descripción de la mascota

  @Column()
  breed: string; // Raza de la mascota

  @Column()
  age: number; // Edad de la mascota

  @Column()
  sex: string; // Sexo de la mascota (Macho/Hembra)

  @Column()
  city: string; // Ciudad donde se encuentra la mascota

  @Column({ default: true })
  enabled: boolean; // Publicación habilitada o no

  @CreateDateColumn()
  createdAt: Date; // Fecha de creación de la publicación

  @OneToMany(() => Image, (image) => image.publication, { cascade: true })
  images: Image[]; // Relación con las imágenes asociadas
}
