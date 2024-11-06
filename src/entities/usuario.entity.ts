import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Playlist } from './playlist.entity';
@Entity('Usuario') // Especifica el nombre de la tabla
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false, unique: true })
  correo: string; // Puedes usar tipo string para correos

  @Column({ nullable: false })
  contrasena: string;

  @Column({ nullable: true })
  generos: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' }) // Usando la fecha actual como valor por defecto
  fecha_creacion: Date;

  @OneToMany(() => Playlist, (Playlist) => Playlist.usuario, {})
  playlist: number;
}
