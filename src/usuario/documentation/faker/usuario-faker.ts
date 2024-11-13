import { faker } from '@faker-js/faker';

export const id = faker.number.int();
export const nombre = faker.person.fullName();
export const correo = faker.internet.email().toLowerCase();
export const contrasena = faker.internet.password();
export const generos = faker.music.genre();
export const fecha_creacion = faker.date.between({ from: '2000-01-01', to: Date.now() });

export const usuarioData = {
    id,
    nombre,
    correo,
    generos,
}