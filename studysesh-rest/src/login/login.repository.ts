import {  Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "src/CommonModels/user.model";
import { Repository} from "typeorm";
import { LoginEntity } from "./login.entity";


@Injectable()
export class LoginRepository  {
    query(arg0: {}) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(LoginEntity)
            private repo:Repository<user>
        ){}
}