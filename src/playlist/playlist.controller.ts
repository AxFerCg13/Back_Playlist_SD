import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';

@Controller('usuarios/:idUsuario')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  //* Crear una playlist para un usuario
  @Post('playlists')
  create(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(idUsuario, createPlaylistDto);
  }

  //* Returnar las playlist de un usuario
  @Get('playlists')
  findAll(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
  ) {
    return this.playlistService.findAll(idUsuario);
  }

  //* Retornar una playlist de un usuario
  @Get('playlists/:idPlaylist')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playlistService.findOne(id);
  }

  //* Actualizar los datos de una playlist de un usuario
  @Put('playlists/:idPlaylist')
  update(@Param('id') id: number, @Body() playlist: Partial<Playlist>) {
    return this.playlistService.update(id, playlist);
  }

  //* Eliminar una playlist de un usuario
  @Delete('playlists/:idPlaylist')
  remove(@Param('id') id: number) {
    return this.playlistService.remove(id);
  }
}
