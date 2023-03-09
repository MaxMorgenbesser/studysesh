import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CardSetsEntity } from './card-sets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card, Cards } from 'src/CommonModels/card.model';
import { CardRepository } from './card.repository';
import { CardEntity } from './card.entity';

@Injectable()
export class CardSetsService {
  constructor(
    @InjectRepository(CardSetsEntity)
    private cardSetsRepository: Repository<CardSetsEntity>,
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {}

  async deleteCard (id:string){
   const deleted =  await this.cardRepository.delete({id:id})
   if (deleted.affected > 0) return {"card deleted":true}
   return {"error":"card not found"}
  }


  async CreateCards(cards: Card[]) {
    let error = false;
    cards.map(async (card: Card) => {
      if (!card?.front || !card?.back || !card?.cardset) {
        error = true;
      } else {
        const newCard = await this.cardRepository.create(card);
        await this.cardRepository.save(newCard);
      }
    });

    if (error) {
      throw new HttpException(
        'Fields are required',
        HttpStatus.PARTIAL_CONTENT,
      );
    }
    return cards;
  }




  async AddCardSet(cards: Cards) {
    if (!cards.ownedBy || !cards.name) {
      throw new HttpException(
        'Fields are required',
        HttpStatus.PARTIAL_CONTENT,
      );
    }
    const cardSet = await this.cardSetsRepository.create(cards);
    await this.cardSetsRepository.save(cardSet);
    return cardSet;
  }

  async GetCardSetsByID(id: string) {
    if (!id) {
      throw new HttpException('id is required', HttpStatus.PARTIAL_CONTENT);
    }
    const cardsets = await this.cardSetsRepository.findBy({ ownedBy: id });
    if (cardsets.length < 1) {
      throw new HttpException('No Cards Found', HttpStatus.PARTIAL_CONTENT);
    } else {
      return cardsets;
    }
  }

  async GetCards(id: string) {
    if (!id) {
      throw new HttpException('id is required', HttpStatus.PARTIAL_CONTENT);
    }
    const cards = await this.cardRepository.findBy({ cardset: id });

    if (cards.length < 1) {
      return { cardsFound: false };
    } else
      return {
        cardsFound: true,
        cards: cards,
      };
  }
}
