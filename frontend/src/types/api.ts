import { CardItem, SinglePlayerGame } from './game';

export type ResponseBase<T> = {
  data: T;
};
export type SinglePlayerGameCreationResponse = ResponseBase<{
  id: number;
}>;

export type SinglePlayerGameActionResponse = ResponseBase<{
  first: string;
  second: string;
  isWin: boolean;
}>;

export type GameData = {
  cards: Array<CardItem>;
  game: Array<SinglePlayerGame>;
};

export type SinglePlayerGameShowResponse = ResponseBase<GameData>;
