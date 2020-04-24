import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { STRING, DATE, NUMBER } from 'sequelize/types';

@Table({ tableName: 'person' })
class PersonEntity extends Model<PersonEntity> {

  @Column(STRING)
  public name!: string;

  @Column(STRING)
  public phone!: string;

  @Column(NUMBER)
  public age!: number;

  @Column(DATE)
  public birthday!: Date | null;

  // @HasMany(() => Person)
  // children: Person[];
}
