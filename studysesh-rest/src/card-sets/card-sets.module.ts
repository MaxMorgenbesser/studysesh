import { Module } from '@nestjs/common';
import { CardsetsController } from './card-sets.controller';
import { CardSetsService } from './card-sets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSetsEntity } from './card-sets.entity';
import { CardEntity } from './card.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CardSetsEntity]), TypeOrmModule.forFeature([CardEntity])],
  controllers: [CardsetsController],
  providers: [CardSetsService]
})
export class CardSetsModule {}
