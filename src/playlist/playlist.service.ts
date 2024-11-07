import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
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
  async findOne(idUsuario: number, idPlaylist): Promise<Object> {
    try {
      const playlist = await this.playlistRepository.findOne({ where: { id: idPlaylist, usuario: { id: idUsuario } } });
      return { data: playlist };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Actualizar una playlist
  async update(id: number, playlist: Partial<Playlist>) {
    await this.playlistRepository.update(id, playlist);
    // return this.findOne(id);
  }

  // Eliminar una playlist
  async remove(idUsuario: number, idPlaylist: number): Promise<Object> {
    try {
      const playlist = await this.playlistRepository.delete({ id: idPlaylist, usuario: { id: idUsuario } });
      if (playlist.affected !== 0) {
        return { data: { "affected": playlist.affected } }
      } else {
        throw new NotFoundException(`Playlist con el id: ${idPlaylist} no existe`);
      }
    } catch (err) {
      this.handleErrors(err);
    }
  }

  handleErrors(err: any) {
    this.logger.error(err)
    if (err.code) {
      throw new BadRequestException(err.sqlMessage)
    }
  }
}
