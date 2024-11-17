import { ApiOperationOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { dataCancion } from "./faker/cancion-faker";

//* Parámetros
export const idPlaylist: ApiParamOptions = { name: "idPlaylist", type: Number, description: "Id de la playlist", example: 18 };
export const idCancion: ApiParamOptions = { name: "idCancion", type: Number, description: "Id de la canción", example: 5 };

//* Response Objects
const response200 = {
    message: "Canciones de la playlist",
    statusCode: 200,
    data: [dataCancion]
};

const responseCancion = {
    message: "Canción",
    statusCode: 200,
    data: dataCancion
};

const responseDelete = {
    message: "Canción eliminada",
    statusCode: 200,
    data: {
        affected: 1
    }
};

const response201 = {
    message: "Canción agregada",
    statusCode: 201,
    data: dataCancion
};

const response400 = {
    message: "Descripción del error",
    error: "Bad Request",
    statusCode: 400
};

const response404 = {
    message: "Descripción del error",
    error: "Not Found",
    statusCode: 404
};

//* Crear una canción
export const createCancionSummary: ApiOperationOptions = {
    summary: "Agregar una canción en una playlist",
    description: "Permite agregar una canción a una playlist existente"
};

export const createCancion201: ApiResponseOptions = {
    status: 201,
    description: "Canción agregada correctamente",
    schema: {
        example: response201
    }
};

export const createCancion400: ApiResponseOptions = {
    status: 400,
    description: "Bad Request",
    schema: {
        example: response400
    }
};

//* Retornar las canciones de una playlist
export const cancionesSummary: ApiOperationOptions = { summary: "Retornar las canciones de una playlist" };

export const canciones200: ApiResponseOptions = {
    status: 200,
    description: "Canciones de una playlist",
    schema: {
        example: response200
    }
};

export const canciones404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Playlist no encontrada",
    schema: {
        example: response404
    }
};

//* Eliminar una canción
export const deleteCancionSummary: ApiOperationOptions = { summary: "Eliminar una canción de una playlist" };

export const deleteCancion200: ApiResponseOptions = {
    status: 200,
    description: "Canción eliminada",
    schema: {
        example: responseDelete
    }
};

export const deleteCancion404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Canción no encontrada",
    schema: {
        example: response404
    }
};
