import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { createCancionSummary, createCancion201, createCancion400, cancionesSummary, canciones200, canciones404, deleteCancionSummary, deleteCancion200, deleteCancion404, idPlaylist, idCancion} from './documentation/cancion-paths-options';
import { Cancion } from '../entities/cancion.entity';

@Controller('playlists/:idPlaylist/canciones')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  //* Agregar una canción a una playlist
  @ApiParam(idPlaylist)
  @ApiOperation(createCancionSummary)
  @ApiResponse(createCancion201)
  @ApiResponse(createCancion400)
  @Post()
  create(
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number,
    @Body() createCancionDto: CreateCancionDto,
  ) {
    return this.cancionService.create(idPlaylist, createCancionDto);
  }

  //* Retornar todas las canciones de una playlist
  @Get()
  @ApiOperation(cancionesSummary)
  @ApiResponse(canciones200)
  @ApiResponse(canciones404)
  @ApiParam(idPlaylist)
  findAll(@Param('idPlaylist', ParseIntPipe) idPlaylist: number) {
    return this.cancionService.findAll(idPlaylist);
  }

  //* Eliminar una canción de una playlist
  @Delete(':idCancion')
  @ApiOperation(deleteCancionSummary)
  @ApiResponse(deleteCancion200)
  @ApiResponse(deleteCancion404)
  @ApiParam(idPlaylist)
  @ApiParam(idCancion)
  remove(
    @Param('idPlaylist', ParseIntPipe) idPlaylist: number,
    @Param('idCancion', ParseIntPipe) idCancion: number,
  ) {
    return this.cancionService.remove(idPlaylist, idCancion);
  }
}
