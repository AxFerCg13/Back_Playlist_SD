import { ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";
import { usuarioData } from "./faker/usuario-faker";



export const createSummary: ApiOperationOptions = {
    summary: "Crear un usuario",
    description: "Para crear un usuario es necesario que el correo tenga un registro único en el sistema y que la contreaseña contenga valores como números, letras mayusculas, minusculas y simbolos"
}

export const create201: ApiResponseOptions = {
    status: 201,
    description: "Usuario creado",
    schema: {
        example:
            usuarioData
    }
}