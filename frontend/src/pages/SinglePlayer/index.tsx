import { useParams } from 'react-router';
import { PageHeading, GameCards } from '../../components';
import { useShowGame, useTimer } from '../../hooks';
import { Container } from './styled';

export const SinglePlayer = () => {
  const { id } = useParams<'id'>();
  const { data, isLoading } = useShowGame(Number(id));

  const [second, minute] = useTimer();

  return (
    <Container isLoading={isLoading}>
      <PageHeading className="heading">
        {minute}:{second}
      </PageHeading>
      {data && <GameCards cards={data.cards} />}
    </Container>
  );
};
