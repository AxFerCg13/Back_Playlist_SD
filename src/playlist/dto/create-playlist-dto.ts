import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { generoOptions, tituloOptions } from "../documentation/playlist-options";

export class CreatePlaylistDto {

    @ApiProperty(tituloOptions)
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty(generoOptions)
    @IsString()
    @IsNotEmpty()
    generos: string;
}