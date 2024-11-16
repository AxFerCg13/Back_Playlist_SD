import { faker } from '@faker-js/faker';

const idCancion = faker.number.int({ max: 10000, min: 1 });
export const nombre = faker.music.songName();
export const artista = faker.music.artist();
export const anioSalida = faker.date.between({ from: '1970-01-01', to: '2024-12-31' });
const disco = faker.helpers.arrayElement([faker.music.album(), null]); // Puede ser nulo
const fechaAgregada = faker.date.recent({ days: 30 });
const playlistId = faker.number.int({ max: 1000, min: 1 }); // Relación con Playlist

export const dataCancion = {
    idCancion,
    nombre,
    artista,
    anioSalida,
    disco,
    status: "Active",
    fechaAgregada,
    playlistId,
};
