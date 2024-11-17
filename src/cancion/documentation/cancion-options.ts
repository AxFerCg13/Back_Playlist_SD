import { ApiPropertyOptions } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { nombre, artista, anioSalida, disco } from "./faker/cancion-faker";

export const nombreOptions: ApiPropertyOptions = {
    title: "Título de la canción",
    type: "string",
    example: nombre,
};

export const artistaOptions: ApiPropertyOptions = {
    title: "Artista",
    type: "string",
    example: artista,
};

export const anioSalidaOptions: ApiPropertyOptions = {
    title: "Año de Salida",
    description: "Fecha en la que la canción salió al público",
    type: "string",
    format: "date-time",
    example: anioSalida, // Convertir la fecha a formato ISO para Swagger
};

export const discoOptions: ApiPropertyOptions = {
    title: "Disco",
    description: "Álbum al que pertenece la canción. Puede ser nulo.",
    type: "string",
    nullable: true,
    example: disco,
};

