import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    generos: string;

    @IsNumber()
    id_usuario: number;
}