import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "test"})
export class TableDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sex: number;

  @Column()
  age: number;

  @Column()
  severity: number;

  @Column()
  death: number;

  @Column()
  PT: number;

  @Column()
  D: number;

  @Column()
  FIB: number;

  @Column()
  drug: number;
}
