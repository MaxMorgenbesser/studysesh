import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { login } from 'src/CommonModels/user.model';
import { Repository } from 'typeorm';
import { LoginEntity } from './login.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private loginRepository: Repository<LoginEntity>,
  ) {}
  async getUserById(id: string): Promise<LoginEntity> {
    const user = this.loginRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User is not found');
    }
    return user;
  }

  async signup(user: LoginEntity) {
    const saltOrRounds = 10;
    const password = user.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    user.password = hash;

    const newUser = this.loginRepository.create({
      ...user,
    });

    await this.loginRepository.save(newUser);
    return newUser;
  }

  async Login(user: login) {
   const foundUser = await this.loginRepository.findOneBy({userName:user.userName})
    if (!foundUser){
        return {"error":"user not found"}
    }
    const isMatch = await bcrypt.compare(user.password,foundUser.password )
    if (isMatch){
        return {success:true, ...foundUser}
    } else {
        return { "error": "password is incorrect"}
    }
  }

}
