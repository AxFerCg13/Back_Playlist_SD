import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancion } from '../entities/cancion.entity';

@Injectable()
export class CancionService {
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  // Crear una nueva canción
  async create(cancion: Cancion): Promise<Cancion> {
    return this.cancionRepository.save(cancion);
  }

  // Obtener todas las canciones
  async findAll(): Promise<Cancion[]> {
    return this.cancionRepository.find();
  }

  // Obtener una canción por ID
  async findOne(id: number): Promise<Cancion> {
    return this.cancionRepository.findOne({ where: { id } });
  }

  // Actualizar una canción
  async update(id: number, cancion: Partial<Cancion>): Promise<Cancion> {
    await this.cancionRepository.update(id, cancion);
    return this.findOne(id);
  }

  // Eliminar una canción
  async remove(id: number): Promise<void> {
    await this.cancionRepository.delete(id);
  }
}
