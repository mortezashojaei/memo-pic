import { getRepository } from 'typeorm';
import { cardImages } from '../constants/cardImages';
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

function getImageLinkById(id: string) {
  return cardImages.find((image) => image.id === id).url;
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
      newCard.position2 =
        suffledPositions[suffledPositions.length - index];
      await getRepository(SinglePlayCards).save(newCard);
    });
    return gameCreationResult;
  } catch (error) {
    return Promise.reject(error);
  }
};

const show = async (id: number) => {
  const game = await getRepository(SinglePlayerGame).findOne(id);
  if (!game) return null;
  const cards = await getRepository(SinglePlayCards).find({
    where: {
      game,
      isLocked: false,
    },
  });

  return {
    cards: cards.map(({ position1, position2, imageId }) => ({
      position1,
      position2,
      image: getImageLinkById(imageId),
    })),
    game,
  };
};

const action = async ({
  first,
  second,
  gameId,
}: {
  first: number;
  second: number;
  gameId: number;
}) => {
  const firstCard = await getRepository(SinglePlayCards).find({
    where: [
      {
        game: gameId,
        position1: first,
      },
      {
        game: gameId,
        position2: first,
      },
    ],
  });
  const secondCard = await getRepository(SinglePlayCards).find({
    where: [
      {
        game: gameId,
        position1: second,
      },
      {
        game: gameId,
        position2: second,
      },
    ],
  });

  const isWin = firstCard[0].id === secondCard[0].id;

  if (isWin) {
    getRepository(SinglePlayCards).save({
      id: firstCard[0].id,
      isLocked: false,
    });
  }
  return {
    first: getImageLinkById(firstCard[0].imageId),
    second: getImageLinkById(secondCard[0].imageId),
    isWin,
  };
};

export default {
  create,
  show,
  action,
};
