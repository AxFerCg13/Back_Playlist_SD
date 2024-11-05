import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { Cancion } from '../entities/cancion.entity';

@Controller('canciones')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Post()
  create(@Body() cancion: Cancion) {
    return this.cancionService.create(cancion);
  }

  @Get()
  findAll() {
    return this.cancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cancionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cancion: Partial<Cancion>) {
    return this.cancionService.update(id, cancion);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cancionService.remove(id);
  }
}
