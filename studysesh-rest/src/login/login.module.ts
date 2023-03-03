import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginRepository } from './login.repository';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([LoginRepository])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
