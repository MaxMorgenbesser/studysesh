import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoginEntity } from './login/login.entity';
import { CardSetsModule } from './card-sets/card-sets.module';
import { CardsetsController } from './card-sets/card-sets.controller';
import { CardSetsEntity } from './card-sets/card-sets.entity';

@Module({
  imports: [
    CardSetsModule,
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD, 
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities:[LoginEntity,CardSetsEntity]
    }),
   
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
