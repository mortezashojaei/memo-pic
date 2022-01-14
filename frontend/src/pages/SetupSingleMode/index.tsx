import {
  CenteredPageContainer,
  LinkButton,
  PageHeading,
  TextField,
} from '../../components';
import { MainContainer } from './styled';

export const SetupSingleMode = () => {
  return (
    <CenteredPageContainer>
      <PageHeading>Enter Your Name</PageHeading>
      <MainContainer>
        <TextField name="name" label="Name:" />
        <LinkButton className="button" to="/single-player">
          START
        </LinkButton>
      </MainContainer>
    </CenteredPageContainer>
  );
};
