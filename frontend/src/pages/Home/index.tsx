import { LinkButton } from '../../components';
import { Container, ButtonsContainer, Heading } from './styled';

export const Home = () => (
  <Container>
    <Heading>Memo Pic</Heading>
    <ButtonsContainer>
      <LinkButton to="/setup-single-mode" className="button">
        Single Player
      </LinkButton>
      <LinkButton to="/setup-multi-mode" className="button">
        Multi Player
      </LinkButton>
      <LinkButton to="/records-list" className="button">
        Records List
      </LinkButton>
    </ButtonsContainer>
  </Container>
);
