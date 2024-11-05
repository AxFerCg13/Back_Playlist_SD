import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Playlist } from '../entities/playlist.entity';
import { Cancion } from '../entities/cancion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Usuario, Playlist, Cancion], // Asegúrate de que las entidades se importen correctamente
      synchronize: true, // Usar con precaución en producción
    }),
    TypeOrmModule.forFeature([Usuario, Playlist, Cancion]), // Registra las entidades
  ],
})
export class DatabaseModule {}
