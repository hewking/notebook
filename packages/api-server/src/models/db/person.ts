import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { STRING } from 'sequelize/types';

@Table({ tableName: 'person' })
class Person extends Model<Person> {

  @Column
  name: string;

  @Column(STRING)
  public phone: string;

  @Column
  birthday: Date;

  @HasMany(() => Person)
  children: Person[];
}
