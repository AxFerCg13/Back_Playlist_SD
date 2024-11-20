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
  anioSalida: Date;

  @Column({ nullable: true })
  disco: string;

  @Column({ default: 'Active' })
  status: string;

  @Column({ nullable: true })
  urlImagen: string;

  @Column({ default: false })
  urlPreview: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fechaAgregada: Date;

  @ManyToOne(() => Playlist, (Playlist) => Playlist.cancion, { onDelete: "CASCADE" })
  playlist: Playlist;
}
