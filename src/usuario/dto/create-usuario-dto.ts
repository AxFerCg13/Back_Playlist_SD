import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { contrasenaOptions, correoOptions, generosOptions, nombreOptions } from "../documentation/usuario-options";

export class CreateUsuarioDto {
    @ApiProperty(nombreOptions)
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty(correoOptions)
    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @ApiProperty(contrasenaOptions)
    @IsString()
    @IsNotEmpty()
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message:
            'The password must have a Uppercase, lowercase letter and a number',
    })
    contrasena: string;

    @ApiProperty(generosOptions)
    @IsString()
    @IsOptional()
    generos?: string;
}