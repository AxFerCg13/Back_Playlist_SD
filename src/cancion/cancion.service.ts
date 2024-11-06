import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancion } from '../entities/cancion.entity';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { T } from '@faker-js/faker/dist/airline-BLb3y-7w';

@Injectable()
export class CancionService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) { }

  // Crear una nueva canción
  async create(idPlaylist: number, createCancionDto: CreateCancionDto): Promise<Object> {
    try {
      const cancion = await this.cancionRepository.create({ ...createCancionDto, playlist: { id: idPlaylist } });
      await this.cancionRepository.save(cancion);
      return { data: cancion };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Obtener todas las canciones
  async findAll(idPlaylist: number): Promise<Object> {
    try {
      const canciones = await this.cancionRepository.find({ where: { playlist: { id: idPlaylist } } })
      return { data: canciones }
    } catch (err) {
      this.handleErrors(err);
    }
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
