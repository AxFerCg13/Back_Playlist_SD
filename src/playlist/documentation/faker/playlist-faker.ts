import { faker } from '@faker-js/faker';

const id = faker.number.int({ max: 1000, min: 1 });
export const titulo = faker.music.album();
export const generos = faker.music.genre();
const fecha_creacion = faker.date.between({ from: '2000-01-01', to: Date.now() });

export const playlistData = {
    id,
    titulo,
    generos,
    fecha_creacion
}