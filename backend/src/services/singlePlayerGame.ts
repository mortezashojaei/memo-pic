import { getRepository } from 'typeorm';
import { SinglePlayerGame } from '../entities/SinglePlayerGame.entity';

const create = (name: string) => {
  const newGame = new SinglePlayerGame();
  newGame.name = name;
  return getRepository(SinglePlayerGame).save(newGame);
};

export default {
  create,
};
