import {
  LinkButton,
  PageHeading,
  CenteredPageContainer,
} from '../../components';
import { ButtonsContainer } from './styled';

export const Home = () => (
  <CenteredPageContainer>
    <PageHeading>Memo Pic</PageHeading>
    <ButtonsContainer>
      <LinkButton to="/setup-single-mode" className="button">
        Single Player
      </LinkButton>
      <LinkButton to="/setup-multi-mode" className="button">
        Multi Player
      </LinkButton>
      <LinkButton to="/records-list" className="button">
        Highscore List
      </LinkButton>
    </ButtonsContainer>
  </CenteredPageContainer>
);
