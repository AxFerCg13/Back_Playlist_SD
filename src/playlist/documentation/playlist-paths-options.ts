import { ApiOperationOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { dataPlaylist } from "./faker/playlist-faker";

//* Parametros
export const idUsuario: ApiParamOptions = { name: "idUsuario", type: Number, description: "Id del usuario", example: 1 };
export const idPlaylist: ApiParamOptions = { name: "idPlaylist", type: Number, description: "Id del usuario", example: 18 };

//* Response Objects
const { urlImagen, ...dataPlay } = dataPlaylist;

const response200 = {
    message: "Datos playlist",
    statusCode: 200,
    data: [dataPlay]
}

const responsePlaylist = {
    message: "Datos playlist",
    statusCode: 200,
    data: dataPlaylist
}

const responseDelete = {
    message: "Playlist eliminada",
    statusCode: 200,
    data: {
        affected: 1
    }
}
const response201 = {
    message: "Playlist creada",
    statusCode: 201,
    data: dataPlaylist
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


//* Crear una playlist
export const createPlaylistSummary: ApiOperationOptions = {
    summary: "Crear una playlist para un usuario",
    description: "Se pueden crear una gran cantidad de playlist para un usuario"
}

export const create201: ApiResponseOptions = {
    status: 201,
    description: "Playlist creada",
    schema: {
        example: response201
    }
}

export const create400: ApiResponseOptions = {
    status: 400,
    description: "Bad Request",
    schema: {
        example: response400
    }
}

//* Retornar las playlist de un usuario
export const playlistsSumnary: ApiOperationOptions = { summary: "Retornar las playlists de un usuario" }
export const playlistsUsuario200: ApiResponseOptions = {
    status: 200,
    description: "Playlist de un usuario",
    schema: {
        example: response200
    }
}

export const playlistsUsuario404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Usuario no encontrado",
    schema: {
        example: response404
    }
}

//* Retornar la playlist de un usuario
export const playlistSumnary: ApiOperationOptions = { summary: "Retornar una playlist de un usuario" };

export const playlistUsuario200: ApiResponseOptions = {
    status: 200,
    description: "Playlist de un usuario",
    schema: {
        example: responsePlaylist
    }
}

export const playlistUsuario404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Playlist no encontrada",
    schema: {
        example: response404
    }
}

//* Eliminar una playlist de un usuario
export const deletePlaylistSummary: ApiOperationOptions = { summary: "Eliminar una playlist de un usuario" };

export const deletePlaylist200: ApiResponseOptions = {
    status: 200,
    description: "Playlist eliminada",
    schema: {
        example: responseDelete
    }
}

export const deletePlaylist404: ApiResponseOptions = {
    status: 404,
    description: "Not Found - Playlist no encontrada",
    schema: {
        example: response404
    }
}

//* Añadir portada a una playlist
export const addCover201: ApiResponseOptions = {
    status: 201,
    description: "Portada agregada",
    schema: {
        example: {
            message: "Portada agregada",
            statusCodE: 201,
            data: {
                affected: 1
            }
        }
    }
}

export const addCover404: ApiResponseOptions = {
    status: 404,
    description: "Not Found",
    schema: {
        example: {
            message: "Playlist con el id: no existe",
            error: "Not Found",
            statusCodE: 404,
        }
    }
}