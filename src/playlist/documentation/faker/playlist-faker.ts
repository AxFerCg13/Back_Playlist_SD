import { faker } from '@faker-js/faker';

const idPlaylist = faker.number.int({ max: 1000, min: 1 });
export const titulo = faker.music.album();
export const generos = faker.music.genre();
const urlImagen = faker.internet.url();
const fecha_creacion = faker.date.between({ from: '2000-01-01', to: Date.now() });
const idUsuario = faker.number.int({ max: 1000, min: 1 });

export const dataPlaylist = {
    idPlaylist,
    titulo,
    generos,
    urlImagen,
    fecha_creacion,
    status: "Active",
}