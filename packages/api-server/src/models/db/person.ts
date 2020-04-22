import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({ tableName: 'person' })
class Person extends Model<Person> {

  @Column
  name: string;

  @Column
  birthday: Date;

  @HasMany(() => Hobby)
  hobbies: Hobby[];
}

export interface Hobby {

}