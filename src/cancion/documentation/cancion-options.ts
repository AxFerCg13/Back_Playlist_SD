import { ApiPropertyOptions } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { nombre, artista, anioSalida, disco, urlImagen, urlPreview } from "./faker/cancion-faker";

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

export const urlImagenOptions: ApiPropertyOptions = {
    title: "Url de la imagen de la canción",
    description: "Enlace de la imagen de la canción",
    type: "string",
    nullable: true,
    example: urlImagen
}


export const urlPreviewOptions: ApiPropertyOptions = {
    title: "Url de la preview de la canción",
    description: "Enlace a una vista previa de la canción",
    type: "string",
    nullable: true,
    example: urlPreview
};