import {  Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CardSetsEntity } from "./card-sets.entity";


@Injectable()
export class CardSetsRepository  {
    query(arg0: {}) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(CardSetsEntity)
            private repo:Repository<CardSetsEntity>
        ){}
}