import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CardSetsEntity } from './card-sets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from 'src/CommonModels/card.model';

@Injectable()
export class CardSetsService {
  constructor(
    @InjectRepository(CardSetsEntity)
    private cardSetsRepository: Repository<CardSetsEntity>,
  ) {
  
  }
  async AddCardSet(cards:Cards){
        console.log(cards)
    if (!cards.ownedBy || !cards.name) {
        throw new HttpException('Fields are required', HttpStatus.PARTIAL_CONTENT)
    }
  const cardSet = await this.cardSetsRepository.create(cards)

    await this.cardSetsRepository.save(cardSet)

    return cardSet
      
  }
}
