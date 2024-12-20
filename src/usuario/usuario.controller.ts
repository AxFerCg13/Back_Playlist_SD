import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { create201, create400, createSummary, getUsuario200, getUsuario404, getUsuarioSummary, idUsuario } from './documentation/usuario-paths-options';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  //* Create one user
  @ApiOperation(createSummary)
  @ApiResponse(create201)
  @ApiResponse(create400)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  //* Return one user
  @ApiOperation(getUsuarioSummary)
  @ApiParam(idUsuario)
  @ApiResponse(getUsuario200)
  @ApiResponse(getUsuario404)
  @Get(':idUsuario')
  findOne(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
    return this.usuarioService.findOne(idUsuario);
  }

  @Delete(':idUsuario')
  remove(@Param('idUsuario') idUsuario: number) {
    return this.usuarioService.remove(idUsuario);
  }
}
