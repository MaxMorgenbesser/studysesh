import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginEntity } from './login.entity';
import { LoginRepository } from './login.repository';


@Injectable()
export class LoginService {
    constructor (
        @InjectRepository(LoginEntity)
        private loginRepository:Repository<LoginEntity>){
    }
async getUserById(id:string): Promise<LoginEntity> {
    const user = this.loginRepository.findOneBy({id})
    if (!user){ 
        throw new NotFoundException("User is not found")
    }
    return user
}

async signup (user:LoginEntity) {
    const newUser = this.loginRepository.create({
        ...user
    })
    await this.loginRepository.save(newUser)
    return newUser

}
//   signUp(): Promise<user>{
//     const user = this.loginRepository.create()

//   }
       
       
    }

