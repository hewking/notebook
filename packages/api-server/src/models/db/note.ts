import { Model, Table, PrimaryKey, Column, AutoIncrement } from "sequelize-typescript";
import { NUMBER, STRING, DATE, INET, INTEGER } from "sequelize";

@Table({ tableName: "notes" })
export default class NoteEntity extends Model<NoteEntity> {

    @PrimaryKey
    @AutoIncrement
    @Column(INTEGER)
    public id!: number;

    @Column(STRING)
    public title!: string;

    @Column(DATE)
    public date!: Date;

    @Column(STRING)
    public content!: string;

}