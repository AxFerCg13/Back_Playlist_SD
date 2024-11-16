import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CommonModule } from 'src/common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [CommonModule, TypeOrmModule.forFeature([Usuario])]
})
export class AuthModule { }
