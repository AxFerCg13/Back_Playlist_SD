import { ApiOperationOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { playlistData } from "./faker/playlist-faker";

//* Parametros
export const idUsuario: ApiParamOptions = { name: "idUsuario", type: Number, description: "Id del usuario", example: 12 }

//* Response Objects
const response201 = {
    message: "Playlist creada",
    statusCode: 201,
    data: playlistData
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
    description: "Playlist creada",
    schema: {
        example: response400
    }
}

//* Retornar las playlist de un usuario
export const playlistsSumnary: ApiOperationOptions = { summary: "Retornar las playlists de un usuario" }
const { idPlaylist, titulo } = playlistData;
export const playlistsUsuario200: ApiResponseOptions = {
    status: 200,
    description: "Playlist de un usuario",
    schema: {
        example:
            [
                { idPlaylist, titulo }
            ]
    }
}