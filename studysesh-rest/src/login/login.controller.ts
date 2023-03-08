import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { login } from 'src/CommonModels/user.model';
import { LoginEntity } from './login.entity';
import { LoginService } from './login.service';

@Controller('user')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get('/:id')
  GetById(@Param('id') id: string): Promise<LoginEntity> {
    return this.loginService.getUserById(id);
  }

  @Post('/login')
    Login(@Body('user') user:login) {
      return this.loginService.Login(user)
    }

  @Post('/signup')
  CreateUser(@Body('user') user: LoginEntity) {
    return this.loginService.signup(user);
  }

  
}
