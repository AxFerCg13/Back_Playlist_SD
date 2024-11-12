import { ApiPropertyCommonOptions, ApiPropertyOptions } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { generos, titulo } from "./faker/playlist-faker";


export const tituloOptions: ApiPropertyOptions = {
    title: "Titulo de la cancion",
    type: "string",
    example: titulo
}

export const generoOptions: ApiPropertyOptions = {
    title: "Genero musical",
    description: "Generos musicales que contiene la playlist",
    type: "string",
    example: generos
}