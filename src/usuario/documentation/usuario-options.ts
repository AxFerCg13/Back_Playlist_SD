import { ApiPropertyOptions } from "@nestjs/swagger";
import { contrasena, correo, generos, nombre } from "./faker/usuario-faker";

export const nombreOptions: ApiPropertyOptions = {
    description: "Nombre del usuario",
    example: nombre,
    type: "string",
    nullable: false
}

export const correoOptions: ApiPropertyOptions = {
    description: "Correo del usuario - tiene que ser único",
    example: correo,
    type: "string",
    nullable: false
}

export const contrasenaOptions: ApiPropertyOptions = {
    description: "Contraseña del usuario",
    example: contrasena,
    type: "string",
    nullable: false
}

export const generosOptions: ApiPropertyOptions = {
    description: "Contraseña del usuario",
    example: generos,
    type: "string",
    nullable: false
}
