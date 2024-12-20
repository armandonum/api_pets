import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module'; // Importamos el módulo de Usuario
import { Usuario } from './usuario/usuario.entity'; // Importamos la entidad Usuario

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'arm', // Cambia con tus credenciales
      password: 'password', // Cambia con tus credenciales
      database: 'postgres', // Nombre de tu base de datos
      entities: [Usuario], // Las entidades que usaremos
      synchronize: true, // Sincroniza las entidades con la base de datos (en desarrollo)
    }),
    UsuarioModule, // Importamos el módulo de Usuario
  ],
})
export class AppModule {}
