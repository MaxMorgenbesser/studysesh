import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginEntity } from './login.entity';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([LoginEntity])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
