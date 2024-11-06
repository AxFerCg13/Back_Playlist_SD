import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) { }

  // Crear un nuevo usuario
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  // Obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  // Obtener un usuario por ID
  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { id } });
  }

  // Actualizar un usuario
  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuario);
    return this.findOne(id);
  }

  // Eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
