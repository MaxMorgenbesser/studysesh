import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoginEntity {
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