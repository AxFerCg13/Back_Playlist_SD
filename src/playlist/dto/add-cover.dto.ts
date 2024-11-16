import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddCoverDto {
    @ApiProperty({
        title: "Url de la Imagen",
        type: "string",
        example: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
    })
    @IsString()
    @IsNotEmpty()
    urlImagen: string
}