import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { create201, create400, createPlaylistSummary, idUsuario, playlistsSumnary } from './documentation/playlist-paths-options';

@Controller('usuarios/:idUsuario')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  //* Crear una playlist para un usuario
  @ApiOperation(createPlaylistSummary)
  @ApiParam(idUsuario)
  @ApiResponse(create201)
  @ApiResponse(create400)
  @Post('playlists')
  create(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(idUsuario, createPlaylistDto);
  }

  //* Retornar las playlists de un usuario
  @ApiOperation(playlistsSumnary)
  @Get('playlists')
  findAll(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
  ) {
    return this.playlistService.findAll(idUsuario);
  }

  //* Retornar una playlist de un usuario
  @Get('playlists/:idPlaylist')
  findOne(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number) {
    return this.playlistService.findOne(idUsuario, idPlaylist);
  }

  //* Actualizar los datos de una playlist de un usuario
  @Put('playlists/:idPlaylist')
  update(@Param('id') id: number, @Body() playlist: Partial<Playlist>) {
    return this.playlistService.update(id, playlist);
  }

  //* Eliminar una playlist de un usuario
  @Delete('playlists/:idPlaylist')
  remove(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number) {
    return this.playlistService.remove(idUsuario, idPlaylist);
  }
}
