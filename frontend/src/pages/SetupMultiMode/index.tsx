import {
  CenteredPageContainer,
  LinkButton,
  PageHeading,
  TextField,
} from '../../components';
import { MainContainer } from './styled';

export const SetupMultiMode = () => {
  return (
    <CenteredPageContainer>
      <PageHeading>Enter Players Name</PageHeading>
      <MainContainer>
        <TextField name="player1" label="First Player:" />
        <TextField name="player2" label="Second Player:" />

        <LinkButton className="button" to="/single-player">
          START
        </LinkButton>
      </MainContainer>
    </CenteredPageContainer>
  );
};
