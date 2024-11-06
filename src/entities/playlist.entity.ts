import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Cancion } from './cancion.entity';

@Entity('Playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  titulo: string;

  @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  generos: string;

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'Active' })
  status: string;

  // Definición de la relación ManyToOne con Usuario
  @ManyToOne(() => Usuario, (Usuario) => Usuario.playlist, {})
  usuario: Usuario;

  @OneToMany(() => Cancion, (Cancion) => Cancion.playlist, {})
  cancion: Cancion;
}


