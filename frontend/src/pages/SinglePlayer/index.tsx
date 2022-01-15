import { PageHeading, GameCards } from '../../components';
import { useTimer } from '../../hooks';
import { Container } from './styled';

export const SinglePlayer = () => {
  const [second, minute] = useTimer();

  return (
    <Container>
      <PageHeading className="heading">
        {minute}:{second}
      </PageHeading>
      <GameCards />
    </Container>
  );
};
