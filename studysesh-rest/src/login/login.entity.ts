import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    userName:string;

    @Column()
    password:string;

    @Column()
    email:string

    @Column()
    phoneNumber:string

}