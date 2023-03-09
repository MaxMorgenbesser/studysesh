import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Cards,Card } from 'src/CommonModels/card.model';
import { CardSetsService } from './card-sets.service';

@Controller('card-sets')
export class CardsetsController {
  constructor(private cardSetsService: CardSetsService) {}

  @Post('/create')
   CreateCardSets(@Body() cards:Cards){
    return this.cardSetsService.AddCardSet(cards)
   }

   @Post('/create/card/')
   CreateCards(@Body('cards') cards:Card[]){
    return this.cardSetsService.CreateCards(cards)
   }

   @Get('/:id')
   getById(@Param('id') id:string){
    return this.cardSetsService.GetCardSetsByID(id)
   }

   @Get('/cards/:id')
   getCardsById(@Param('id') id:string){
    return this.cardSetsService.GetCards(id)  }

    @Delete('/:id')
    DeleteCard(@Param('id') id:string){
        return this.cardSetsService.deleteCard(id)
    }
}
