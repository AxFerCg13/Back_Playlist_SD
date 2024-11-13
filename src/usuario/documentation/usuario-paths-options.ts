import { ApiOperationOptions, ApiParamOptions, ApiPropertyOptions, ApiResponseOptions } from "@nestjs/swagger";
import { usuarioData } from "./faker/usuario-faker";

//* Parametros
export const idUsuario: ApiParamOptions = { name: "idUsuario", type: Number, description: "Id del usuario", example: 12 }

//* Response Objects

const response200 = {

}
const response400 = {
    message: "Descripción del error",
    error: "Bad Request",
    statusCode: 400
}

const response404 = {
    message: "Descripción del error",
    error: "Not Found",
    statusCode: 404
}

//* Crear un usuario
export const createSummary: ApiOperationOptions = {
    summary: "Crear un usuario",
    description: "Para crear un usuario es necesario que el correo tenga un registro único en el sistema y que la contreaseña contenga valores como números, letras mayusculas, minusculas y simbolos"
}

export const create201: ApiResponseOptions = {
    status: 201,
    description: "Usuario creado",
    schema: {
        example: usuarioData
    }
}

export const create400: ApiResponseOptions = {
    status: 400,
    description: "Bad Request - descripción del error",
    schema: {
        example: response400
    }
}

//* Retornar la información de un usuario
export const getUsuarioSummary: ApiOperationOptions = {
    summary: "Retornar la información de un usuario",
}

export const getUsuario200: ApiResponseOptions = {
    status: 200,
    description: "Datos de un usuario",
    schema: {
        example: usuarioData
    }
}

export const getUsuario404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Usuario no encontrado",
    schema: {
        example: response404
    }
}