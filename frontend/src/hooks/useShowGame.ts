import { useEffect, useState } from 'react';
import { getSinglePlayerGame } from '../api';
import { GameData } from '../types';

export const useShowGame = (id: number) => {
  const [data, setData] = useState<GameData>();
  const [isLoading, setIsLoading] = useState(false);

  function fetchGame() {
    setIsLoading(true);
    getSinglePlayerGame(id)
      .then((response) => {
        setData(response.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(
    () => fetchGame(),
    // eslint-disable-next-line
    [],
  );

  return { data, isLoading, fetchGame, setIsLoading };
};
