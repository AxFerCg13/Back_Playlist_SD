import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) { }

  // Crear una nueva playlist
  async create(createPlaylistDto: CreatePlaylistDto) {
    const playlist = await this.playlistRepository.create(createPlaylistDto);
    this.playlistRepository.save(createPlaylistDto);
    return playlist;
  }

  // Obtener todas las playlists
  async findAll(): Promise<Playlist[]> {
    return this.playlistRepository.find();
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
}
