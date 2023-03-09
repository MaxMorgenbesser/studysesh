export interface Cards {
  id: string;
  ownedBy: string;
  private:boolean;
  name:string
}


export interface Card {
  front: string;
  back: string;
  cardset:string;
}
