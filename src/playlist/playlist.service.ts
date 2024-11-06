import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';

@Injectable()
export class PlaylistService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) { }

  // Crear una nueva playlist
  async create(idUsuario: number, createPlaylistDto: CreatePlaylistDto) {
    try {
      const playlist = this.playlistRepository.create({ ...createPlaylistDto, usuario: { id: idUsuario } });
      await this.playlistRepository.save(playlist);
      return { data: playlist };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Obtener todas las playlists
  async findAll(idUsuario: number): Promise<Object> {
    try {
      const playlists = await this.playlistRepository.find({ where: { usuario: { id: idUsuario } } })
      return { data: playlists }
    } catch (err) {
      this.handleErrors(err)
    }
  }

  // Obtener una playlist por ID
  async findOne(id: number): Promise<Playlist> {
    return this.playlistRepository.findOne({ where: { id } });
  }

  // Actualizar una playlist
  async update(id: number, playlist: Partial<Playlist>): Promise<Playlist> {
    await this.playlistRepository.update(id, playlist);
    return this.findOne(id);
  }

  // Eliminar una playlist
  async remove(id: number): Promise<void> {
    await this.playlistRepository.delete(id);
  }

  handleErrors(err: any) {
    this.logger.error(err)
    if (err.code) {
      throw new BadRequestException(err.sqlMessage)
    }
  }
}
