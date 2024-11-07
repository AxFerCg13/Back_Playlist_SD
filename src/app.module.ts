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
import { faker } from '@faker-js/faker';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario, Playlist, Cancion]),
    CommonModule,
    AuthModule,
  ],
  controllers: [UsuarioController, PlaylistController, CancionController],
  providers: [UsuarioService, PlaylistService, CancionService],
})
export class AppModule { }