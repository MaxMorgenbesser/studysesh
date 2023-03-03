import { Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "src/CommonModels/user.model";
import { Repository} from "typeorm";
import { Login } from "./login.entity";


export class LoginRepository  {
    constructor(
        @InjectRepository(Login)
            private repo:Repository<user>
        ){}
}