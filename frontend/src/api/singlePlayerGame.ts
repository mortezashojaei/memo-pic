import {
  SinglePlayerGameCreationResponse,
  SinglePlayerGameShowResponse,
} from '../types';
import { get, post } from './methods';

export const createSinglePlayerGame = (name: string) =>
  post<SinglePlayerGameCreationResponse>(
    '/single-player-game/create',
    {
      name,
    },
  );

export const getSinglePlayerGame = (id: number) =>
  get<SinglePlayerGameShowResponse>(`/single-player-game/show/${id}`);
