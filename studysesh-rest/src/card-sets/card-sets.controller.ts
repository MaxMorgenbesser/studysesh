import { Body, Controller, Post } from '@nestjs/common';
import { Cards } from 'src/CommonModels/card.model';
import { CardSetsService } from './card-sets.service';

@Controller('card-sets')
export class CardsetsController {
  constructor(private cardSetsService: CardSetsService) {}

  @Post('/create')
   CreateCardSets(@Body() cards:Cards){
    return this.cardSetsService.AddCardSet(cards)
   }
}
