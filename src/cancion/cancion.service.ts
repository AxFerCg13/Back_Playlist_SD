import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancion } from '../entities/cancion.entity';
import { CreateCancionDto } from './dto/create-cancion.dto';

@Injectable()
export class CancionService {
  private readonly logger = new Logger(CancionService.name);
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  // Crear y agregar una canción a una Playlist
  async create(idPlaylist: number, createCancionDto: CreateCancionDto): Promise<{ data: Cancion }> {
    try {
      const cancion = this.cancionRepository.create({ ...createCancionDto, playlist: { id: idPlaylist } });
      await this.cancionRepository.save(cancion);
      return { data: cancion };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Devolver todas las canciones de una playlist
  async findAll(idPlaylist: number): Promise<{ data: Cancion[] }> {
    try {
      const canciones = await this.cancionRepository.find({ where: { playlist: { id: idPlaylist } } });
      if (!canciones.length) {
        throw new NotFoundException(`No se encontraron canciones para la playlist con id: ${idPlaylist}`);
      }
      return { data: canciones };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Eliminar una canción de una Playlist
  async remove(idPlaylist: number, idCancion: number): Promise<{ data: { affected: number } }> {
    try {
      const cancion = await this.cancionRepository.findOne({ where: { id: idCancion, playlist: { id: idPlaylist } } });
      if (!cancion) {
        throw new NotFoundException(`Canción con el id: ${idCancion} no existe`);
      }

      const cancionRemoved = await this.cancionRepository.delete({ id: idCancion, playlist: { id: idPlaylist } });
      return { data: { affected: cancionRemoved.affected } };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Manejo de Errores
  private handleErrors(err: any) {
    this.logger.error(err);
    if (err.errno) {
      throw new BadRequestException(err.sqlMessage);
    }
    if (err.response?.statusCode === 404) {
      throw new NotFoundException(err.response.message);
    }
    throw new BadRequestException('Ocurrió un error inesperado');
  }
}
