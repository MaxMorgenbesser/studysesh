import { Card } from "src/CommonModels/card.model";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CardSetsEntity {
    @PrimaryGeneratedColumn('uuid')
        id:string;
    @Column()
        ownedBy:string;
    @Column()
        private:boolean;
    @Column()
        name:string
}