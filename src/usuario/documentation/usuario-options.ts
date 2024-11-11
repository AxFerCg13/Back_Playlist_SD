import { ApiPropertyOptions } from "@nestjs/swagger";
import { faker } from '@faker-js/faker';

const name = faker.person.fullName();
const correo = faker.internet.email().toLowerCase();
const contrasena = faker.internet.password();
const generos = faker.music.genre();

export const nombreOptions: ApiPropertyOptions = {
    description: "Nombre del usuario",
    example: name,
    type: "string",
    nullable: false
}

export const correoOptions: ApiPropertyOptions = {
    description: "Correo del usuario - tiene que ser único",
    example: correo,
    type: "string",
    nullable: false
}

export const contrasenaOptions: ApiPropertyOptions = {
    description: "Contraseña del usuario",
    example: contrasena,
    type: "string",
    nullable: false
}

export const generosOptions: ApiPropertyOptions = {
    description: "Contraseña del usuario",
    example: generos,
    type: "string",
    nullable: false
}
