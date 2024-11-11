import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { create201, createSummary } from './documentation/usuario-paths-options';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  //* Create one user
  @ApiOperation(createSummary)
  @ApiResponse(create201)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  //* Return one user
  @Get(':idUsuario')
  findOne(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
    return this.usuarioService.findOne(idUsuario);
  }

  @Put(':idUsuario')
  update(@Param('idUsuario') idUsuario: number, @Body() usuario: Partial<Usuario>) {
    return this.usuarioService.update(idUsuario, usuario);
  }

  @Delete(':idUsuario')
  remove(@Param('idUsuario') idUsuario: number) {
    return this.usuarioService.remove(idUsuario);
  }
}
