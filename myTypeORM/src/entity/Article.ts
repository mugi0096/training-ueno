import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Article extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    thumbnailPath: string = ""

    @Column("text")
    title: string = ""

    @Column("text")
    body: string = ""

    @Column("boolean")
    isDist: boolean = false
}