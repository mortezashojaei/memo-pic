import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createSinglePlayerGame } from '../api';

export const useStartGame = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function startGame() {
    if (name) {
      setIsLoading(true);
      createSinglePlayerGame(name)
        .then((response) => {
          navigate(`/single-player/${response.data.data.id}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
  return { setName, isLoading, startGame };
};
