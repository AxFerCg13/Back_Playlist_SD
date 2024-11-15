import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from '../entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { create201, create400, createPlaylistSummary, idUsuario, playlistsSumnary, playlistsUsuario200, playlistsUsuario404, idPlaylist, playlistSumnary, playlistUsuario200, playlistUsuario404, deletePlaylistSummary, deletePlaylist200, deletePlaylist404, updatePlaylistSummary, updatePlaylist200, updatePlaylist400, updatePlaylist404 } from './documentation/playlist-paths-options';

@Controller('usuarios/:idUsuario')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  //* Crear una playlist para un usuario
  @ApiParam(idUsuario)
  @ApiOperation(createPlaylistSummary)
  @ApiResponse(create201)
  @ApiResponse(create400)
  @Post('playlists')
  create(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(idUsuario, createPlaylistDto);
  }

  //* Retornar las playlists de un usuario
  @ApiParam(idUsuario)
  @ApiOperation(playlistsSumnary)
  @ApiResponse(playlistsUsuario200)
  @ApiResponse(playlistsUsuario404)
  @Get('playlists')
  findAll(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
  ) {
    return this.playlistService.findAll(idUsuario);
  }

  //* Retornar una playlist de un usuario
  @Get('playlists/:idPlaylist')
  @ApiParam(idUsuario)
  @ApiParam(idPlaylist)
  @ApiOperation(playlistSumnary)
  @ApiResponse(playlistUsuario200)
  @ApiResponse(playlistUsuario404)
  findOne(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number) {
    return this.playlistService.findOne(idUsuario, idPlaylist);
  }

  //* Eliminar una playlist de un usuario
  @Delete('playlists/:idPlaylist')
  @ApiParam(idUsuario)
  @ApiParam(idPlaylist)
  @ApiOperation(deletePlaylistSummary)
  @ApiResponse(deletePlaylist200)
  @ApiResponse(deletePlaylist404)
  remove(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number) {
    return this.playlistService.remove(idUsuario, idPlaylist);
  }

  //* Actualizar una playlist de un usuario
  @Put('playlists/:idPlaylist')
  @ApiParam(idUsuario)
  @ApiParam(idPlaylist)
  @ApiOperation(updatePlaylistSummary)
  @ApiResponse(updatePlaylist200)
  @ApiResponse(updatePlaylist400)
  @ApiResponse(updatePlaylist404)
  update(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number,
    @Body() createPlaylistDto: CreatePlaylistDto,
  ) {
    return this.playlistService.update(idUsuario, idPlaylist, createPlaylistDto);
  }

}
