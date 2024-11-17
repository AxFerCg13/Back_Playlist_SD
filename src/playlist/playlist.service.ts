import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';
import { AddCoverDto } from './dto/add-cover.dto';

@Injectable()
export class PlaylistService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) { }

  //* Crear una nueva playlist
  async create(idUsuario: number, createPlaylistDto: CreatePlaylistDto) {
    try {
      const playlist = this.playlistRepository.create({ ...createPlaylistDto, usuario: { id: idUsuario } });
      await this.playlistRepository.save(playlist);
      delete playlist.usuario
      return {
        message: "Playlist creada",
        statusCode: 201,
        data: playlist
      };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  //* Agregar portada a una playlist
  async addCover(idUsuario: number, idPlaylist: number, addCoverDto: AddCoverDto) {
    try {
      const playlist = await this.playlistRepository.update({ id: idPlaylist, usuario: { id: idUsuario } }, { urlImagen: addCoverDto.urlImagen },)

      if (playlist.affected === 0) {
        throw new NotFoundException(`Playlist con el id: ${idPlaylist} no existe`)
      }
      return {
        message: "Portada agregada",
        statusCode: 201,
        data: {
          affected: playlist.affected
        }
      }
    } catch (err) {
      this.handleErrors(err);
    }
  }

  //* Obtener todas las playlists
  async findAll(idUsuario: number): Promise<Object> {
    try {
      const playlists = await this.playlistRepository.find({
        where: { usuario: { id: idUsuario } }, select: {
          id: true,
          titulo: true,
          fechaCreacion: true,
          generos: true,
          urlImagen: true,
          status: true
        }
      })

      if (!playlists[0]) {
        throw new NotFoundException(`El usuario con el id: ${idUsuario} no existe`)
      }
      return {
        message: "Datos playlists",
        statusCode: 200,
        data: [playlists]
      }
    } catch (err) {
      this.handleErrors(err)
    }
  }

  // Obtener una playlist por ID
  async findOne(idUsuario: number, idPlaylist): Promise<Object> {
    try {
      const playlist = await this.playlistRepository.findOne({ where: { id: idPlaylist, usuario: { id: idUsuario } } });

      if (!playlist) {
        throw new NotFoundException(`Playlist no encontrada`)
      }

      return {
        message: "Datos playlist",
        statusCode: 200,
        data: playlist
      };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Eliminar una playlist
  async remove(idUsuario: number, idPlaylist: number): Promise<Object> {
    try {
      const playlist = await this.playlistRepository.delete({ id: idPlaylist, usuario: { id: idUsuario } });
      if (playlist.affected !== 0) {
        return {
          message: "Playlist eliminada",
          statusCode: 200,
          data: { "affected": playlist.affected }
        }
      } else {
        throw new NotFoundException(`Playlist con el id: ${idPlaylist} no existe`);
      }
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // Actualizar una playlist
  async update(idUsuario: number, idPlaylist: number, createPlaylistDto: CreatePlaylistDto): Promise<Object> {
    try {
      // Buscar la playlist que corresponde al usuario y al idPlaylist
      const playlist = await this.playlistRepository.findOne({
        where: { id: idPlaylist, usuario: { id: idUsuario } },
      });

      // Si la playlist no se encuentra, lanza una excepción
      if (!playlist) {
        throw new NotFoundException(`Playlist con el id: ${idPlaylist} no encontrada`);
      }

      // Actualiza los campos de la playlist
      playlist.titulo = createPlaylistDto.titulo;
      playlist.generos = createPlaylistDto.generos;

      // Guarda los cambios
      await this.playlistRepository.save(playlist);

      return {
        message: "Playlist actualizada",
        statusCode: 200,
        data: playlist,
      };
    } catch (err) {
      this.handleErrors(err);
    }
  }

  handleErrors(err: any) {
    this.logger.error(err)
    if (err.code) {
      throw new BadRequestException(err.sqlMessage)
    }

    if (err.status === 404) {
      throw new NotFoundException(err.response.message);
    }
  }
}
