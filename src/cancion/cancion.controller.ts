import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';

import { CancionService } from './cancion.service';
import { Cancion } from '../entities/cancion.entity';
import { CreateCancionDto } from './dto/create-cancion.dto';

@Controller('playlists/:idPlaylist/canciones')
export class CancionController {
  constructor(private readonly cancionService: CancionService) { }

  //* Agregar una canción para una playlist
  @Post()
  create(
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number,
    @Body() createCancionDto: CreateCancionDto) {
    return this.cancionService.create(idPlaylist, createCancionDto);
  }

  //* Retornas todas las canciones de una playlist
  @Get()
  findAll(
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number
  ) {
    return this.cancionService.findAll(idPlaylist);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cancionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cancion: Partial<Cancion>) {
    return this.cancionService.update(id, cancion);
  }

  //* Eliminar una canción de una playlist
  @Delete(':idCancion')
  remove(
    @Param('idPlaylist', ParseIntPipe) idPlaylis: number,
    @Param('idCancion', ParseIntPipe) idCancion: number) {
    return this.cancionService.remove(idPlaylis, idCancion);
  }
}
