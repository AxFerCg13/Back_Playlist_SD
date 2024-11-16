import { ApiPropertyOptions } from "@nestjs/swagger";
import { contrasenaFaker, emailFaker } from "./faker/login-faker";

export const emailOptions: ApiPropertyOptions = {
    title: "Correo del usuario",
    type: "string",
    example: emailFaker
}

export const contrasenaOptions: ApiPropertyOptions = {
    title: "Contraseña del usuario",
    type: "string",
    example: contrasenaFaker
}