import { BadRequestException, Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/loginUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';
import { BcryptService } from 'src/common/providers/bcrypt.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcryptService: BcryptService
  ) { }

  async loginValidate(loginUserDto: LoginUserDto) {
    try {
      const { email, contrasena } = loginUserDto;
      const usuario = await this.usuarioRepository.findOne({ where: { correo: email } });
  
      if (!usuario) {
        throw new NotFoundException(`Usuario o contraseña inválidos`);
      }
  
      const check = await this.bcryptService.checkPassword(contrasena, usuario.contrasena);
      if (!check) {
        throw new UnauthorizedException('Acceso denegado');
      }
  
      // Respuesta incluyendo id, nombre y validation
      return {
        message: "Acceso autorizado",
        statusCode: 200,
        data: {
          id: usuario.id,
          nombre: usuario.nombre,
          validation: true, // Se mantiene la validación
        },
      };
    } catch (err) {
      this.handleErrors(err);
    }
  }
  

  private handleErrors(err: any) {
    this.logger.error(err)
    if (err.errno) {
      throw new BadRequestException(err.sqlMessage);
    }
    if (err.response.statusCode === 404) {
      throw new NotFoundException(err.response.message)
    }
    if (err.response.statusCode === 401) {
      throw new UnauthorizedException(err.response.message)
    }
  }

}
