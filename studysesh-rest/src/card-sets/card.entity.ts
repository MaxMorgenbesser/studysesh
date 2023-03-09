
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CardEntity {
    @PrimaryGeneratedColumn('uuid')
        id:string;
    @Column()
        cardset:string
    @Column()
        front:string
    @Column()
        back:string
}