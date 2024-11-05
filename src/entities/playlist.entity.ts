import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  titulo: string;

  @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  generos: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  url_imagen: string;

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'Active' })
  status: string;

  // Definición de la relación ManyToOne con Usuario
  @ManyToOne(() => Usuario) // Relación con la entidad Usuario
  @JoinColumn({ name: 'id_usuario' }) // Columna de clave externa en la tabla Playlist
  id_usuario: Usuario; // Tipo Usuario (entidad relacionada)
}


