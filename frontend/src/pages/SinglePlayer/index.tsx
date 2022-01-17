import { useState } from 'react';
import { useParams } from 'react-router';
import { doActionSinglePlayerGame } from '../../api';
import { PageHeading, GameCards } from '../../components';
import { useShowGame, useTimer } from '../../hooks';
import { CardItem } from '../../types';
import { Container } from './styled';

export const SinglePlayer = () => {
  const { id } = useParams<'id'>();
  const [tempCards, setTempCards] = useState<CardItem[]>([]);
  const { data, isLoading, fetchGame, setIsLoading } = useShowGame(
    Number(id),
  );

  const [second, minute] = useTimer();

  function handleAction(first: number, second: number) {
    setIsLoading(true);
    doActionSinglePlayerGame({ first, second, gameId: Number(id) })
      .then((response) => {
        if (response.data.data.isWin) {
          fetchGame();
        } else {
          setTempCards([
            {
              position1: first,
              position2: first,
              image: response.data.data.first,
            },
            {
              position1: second,
              position2: second,
              image: response.data.data.second,
            },
          ]);

          setTimeout(() => {
            setTempCards([]);
          }, 3000);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container isLoading={isLoading}>
      <PageHeading className="heading">
        {minute}:{second}
      </PageHeading>
      {data && (
        <GameCards
          onAction={handleAction}
          cards={[...data.cards, ...tempCards]}
        />
      )}
    </Container>
  );
};
