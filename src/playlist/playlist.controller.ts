import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from '../entities/playlist.entity';

@Controller('playlists')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(@Body() playlist: Playlist) {
    return this.playlistService.create(playlist);
  }

  @Get()
  findAll() {
    return this.playlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.playlistService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playlist: Partial<Playlist>) {
    return this.playlistService.update(id, playlist);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.playlistService.remove(id);
  }
}
