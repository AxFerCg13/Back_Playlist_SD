import { faker } from '@faker-js/faker';

export const id = faker.number.int();
export const nombre = faker.person.fullName();
export const correo = faker.internet.email().toLowerCase();
export const contrasena = faker.internet.password();
export const generos = faker.music.genre();
export const fecha_creacion = faker.date.timeZone();

export const usuarioData = {
    id,
    nombre,
    correo,
    contrasena,
    generos,
    fecha_creacion
}