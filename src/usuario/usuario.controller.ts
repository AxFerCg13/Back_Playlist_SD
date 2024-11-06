import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  //* Create one user
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
