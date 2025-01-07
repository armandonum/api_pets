import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module'; // Importamos el módulo de Usuario
import { Usuario } from './usuario/usuario.entity'; // Importamos la entidad Usuario
import { ImagesModule } from './images/images.module';
import { Image } from './images/entities/image.entity';
import { PublicationsModule } from './publications/publications.module';
import { Publication } from './publications/entities/publication.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'serdev', // Cambia con tus credenciales
      password: 'nifer2030', // Cambia con tus credenciales
      database: 'db_pets', // Nombre de tu base de datos
      entities: [Usuario, Image, Publication], // Las entidades que usaremos
      synchronize: true, // Sincroniza las entidades con la base de datos (en desarrollo)
    }),
    UsuarioModule,
    ImagesModule,
    PublicationsModule, // Importamos el módulo de Usuario
  ],
})
export class AppModule {}
