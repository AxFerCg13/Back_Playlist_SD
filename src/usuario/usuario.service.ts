import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';
import { BcryptService } from 'src/common/providers/bcrypt.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsuarioService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcryptService: BcryptService
  ) { }

  // Crear un nuevo usuario
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      let usuario;
      usuario = await this.usuarioRepository.create(createUsuarioDto);
      if (usuario) {
        usuario.contrasena = await this.bcryptService.encryptPassword(createUsuarioDto.contrasena);
        usuario = await this.usuarioRepository.save(usuario);
      }
      return { data: usuario }
    } catch (err) {
      this.handleErrors(err)
    }
  }

  // Obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  // Obtener un usuario por ID
  async findOne(id: number): Promise<Object> {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { id }, select: {
          id: true,
          nombre: true,
          generos: true,
          correo: true,
        }
      });
      if (usuario) {
        return { data: usuario }
      } else {
        throw new NotFoundException(`El usuario con el id: ${id} no existe`)
      }
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Actualizar un usuario
  async update(id: number, usuario: Partial<Usuario>) {
    await this.usuarioRepository.update(id, usuario);
    return this.findOne(id);
  }

  // Eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }

  private handleErrors(err: any) {
    this.logger.error(err)
    if (err.errno) {
      throw new BadRequestException(err.sqlMessage);
    }
    if (err.response.statusCode === 404) {
      throw new NotFoundException(err.response.message)
    }
  }
}
