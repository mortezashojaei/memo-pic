import { SinglePlayerGameCreationResponse } from '../types';
import { post } from './methods';

export const createSinglePlayerGame = (name: string) =>
  post<SinglePlayerGameCreationResponse>(
    '/single-player-game/create',
    {
      name,
    },
  );
