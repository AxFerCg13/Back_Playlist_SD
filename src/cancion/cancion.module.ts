import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from '../entities/cancion.entity';
import { CancionService } from './cancion.service';
import { CancionController } from './cancion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion])],
  providers: [CancionService],
  controllers: [CancionController],
})
export class CancionModule {}
