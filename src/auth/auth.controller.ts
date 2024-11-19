import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUser.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { login200, loginSummary, login401 } from './documentation/login-paths';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation(loginSummary)
  @ApiResponse(login200)
  @ApiResponse(login401)
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginValidate(loginUserDto);
  }

}
