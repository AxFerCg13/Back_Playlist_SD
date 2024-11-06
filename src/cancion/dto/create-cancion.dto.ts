import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCancionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    artista: string;

    @IsDateString()
    @IsNotEmpty()
    anioSalida: string;

    @IsString()
    @IsOptional()
    disco?: string;

    @IsNumber()
    @IsNotEmpty()
    idPlaylist: number;
}