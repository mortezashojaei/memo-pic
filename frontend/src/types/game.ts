export type SinglePlayerGame = {
  finished_at: Date;
  created_at: Date;
  id: number;
  name: string;
};

export type CardItem = {
  position1: number;
  position2: number;
  image: string;
};
