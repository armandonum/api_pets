// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

/* ... 
metodo para crear un usuario
@params usuarioData
*/
  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(usuarioData);
    return await this.usuarioRepository.save(usuario);
  }

  /* metodo para obtener todos los usuarios 
  @return Promise<Usuario[]>
  */
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }


  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }


  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
