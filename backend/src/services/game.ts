import { getRepository } from 'typeorm';
import { SinglePlayerGame } from '../entities';

export const getSinglePlayerGameById = async (id: number) => {
  try {
    return await getRepository(SinglePlayerGame).findOne({
      id,
    });
  } catch (e) {
    return null;
  }
};

export const createSinglePlayerGame = async (name: string) => {
  const newGame = new SinglePlayerGame();
  newGame.name = name;
  return await getRepository(SinglePlayerGame).save(newGame);
};
