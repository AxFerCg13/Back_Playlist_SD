import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
