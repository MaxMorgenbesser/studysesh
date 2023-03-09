import {  Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CardEntity } from "./card.entity";


@Injectable()
export class CardRepository  {
    query(arg0: {}) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(CardEntity)
            private repo:Repository<CardEntity>
        ){}
}