import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { contrasenaOptions, emailOptions } from "../documentation/login-options";

export class LoginUserDto {
    @ApiProperty(emailOptions)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty(contrasenaOptions)
    @IsString()
    @IsNotEmpty()
    contrasena: string;

}