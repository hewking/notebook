import { Model, Table, PrimaryKey, Column, AutoIncrement } from "sequelize-typescript";
import { NUMBER, STRING, DATE } from "sequelize/types";

@Table({ tableName: "notes" })
export default class NoteEntity extends Model<NoteEntity> {

    @PrimaryKey
    @AutoIncrement
    @Column(NUMBER)
    public id!: number;

    @Column(STRING)
    public title!: string;

    @Column(DATE)
    public date!: Date;

    @Column(STRING)
    public content!: string;

}