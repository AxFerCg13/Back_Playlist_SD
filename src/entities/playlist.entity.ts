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

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'Active' })
  status: string;

  // Definición de la relación ManyToOne con Usuario
  @ManyToOne(() => Usuario, (Usuario) => Usuario.playlist, {})
  usuario: number;

}


