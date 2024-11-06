import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Playlist } from './entities/playlist.entity';
import { Cancion } from './entities/cancion.entity';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioController } from './usuario/usuario.controller';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistController } from './playlist/playlist.controller';
import { CancionService } from './cancion/cancion.service';
import { CancionController } from './cancion/cancion.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Usuario, Playlist, Cancion],
      synchronize: true, // Para desarrollo, poner en false en producción
    }),
    TypeOrmModule.forFeature([Usuario, Playlist, Cancion]),
  ],
  controllers: [UsuarioController, PlaylistController, CancionController],
  providers: [UsuarioService, PlaylistService, CancionService],
})
export class AppModule { }