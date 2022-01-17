import { cardImages } from '../constants/cardImages';
import { getRepository } from 'typeorm';
import { SinglePlayerGame } from '../entities/SinglePlayerGame.entity';
import { SinglePlayCards } from '../entities/SinglePlayCards.entity';

const positions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

function shuffleArray(array: Array<any>) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const create = async (name: string) => {
  const newGame = new SinglePlayerGame();
  newGame.name = name;
  try {
    const gameCreationResult = await getRepository(
      SinglePlayerGame,
    ).save(newGame);
    const suffledPositions = shuffleArray(positions);
    cardImages.forEach(async (image, index) => {
      const newCard = new SinglePlayCards();
      newCard.game = gameCreationResult;
      newCard.imageId = image.id;
      newCard.position1 = suffledPositions[index];
      newCard.position2 = suffledPositions[positions.length - index];
      await getRepository(SinglePlayCards).save(newCard);
    });
    return gameCreationResult;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  create,
};
