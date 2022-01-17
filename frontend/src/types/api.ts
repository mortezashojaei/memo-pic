import { CardItem, SinglePlayerGame } from './game';

export type ResponseBase<T> = {
  data: T;
};
export type SinglePlayerGameCreationResponse = ResponseBase<{
  id: number;
}>;

export type GameData = {
  cards: Array<CardItem>;
  game: Array<SinglePlayerGame>;
};

export type SinglePlayerGameShowResponse = ResponseBase<GameData>;
