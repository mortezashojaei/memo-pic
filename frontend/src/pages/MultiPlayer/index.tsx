import { PageHeading, GameCards } from '../../components';
import { Container } from './styled';

export const MultiPlayer = () => (
  <Container>
    <PageHeading className="heading">Player1 - Player2</PageHeading>
    <GameCards />
  </Container>
);
