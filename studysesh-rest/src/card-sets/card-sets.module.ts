import { Module } from '@nestjs/common';
import { CardsetsController } from './card-sets.controller';
import { CardSetsService } from './card-sets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSetsEntity } from './card-sets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CardSetsEntity])],
  controllers: [CardsetsController],
  providers: [CardSetsService]
})
export class CardSetsModule {}
