import { ApiProperty } from "@nestjs/swagger";
import { nombreOptions, artistaOptions, anioSalidaOptions, discoOptions } from "../documentation/cancion-options";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCancionDto {
    @ApiProperty(nombreOptions)
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty(artistaOptions)
    @IsString()
    @IsNotEmpty()
    artista: string;

    @ApiProperty(anioSalidaOptions)
    @IsDateString()
    @IsNotEmpty()
    anioSalida: string;

    @ApiProperty(discoOptions)
    @IsString()
    @IsOptional()
    disco?: string;
}