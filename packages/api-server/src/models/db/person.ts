import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { STRING, DATE } from 'sequelize/types';

@Table({ tableName: 'person' })
class Person extends Model<Person> {

  @Column(STRING)
  name: string;

  @Column(STRING)
  public phone: string;

  @Column(DATE)
  birthday: Date;

  @HasMany(() => Person)
  children: Person[];
}
