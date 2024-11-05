import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Playlist } from './playlist.entity';

@Entity('Cancion') // Especifica el nombre de la tabla en la BD
export class Cancion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  artista: string;

  @Column({ type: 'date', nullable: false })
  año_salida: Date;

  @Column({ nullable: true })
  disco: string;

  @Column({ default: 'Active' })
  status: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_agregada: Date;

  @ManyToOne(() => Playlist)
  @JoinColumn({ name: 'id_playlist' }) // Asegúrate de que coincida con el nombre de la columna en la BD
  id_playlist: Playlist;
}
