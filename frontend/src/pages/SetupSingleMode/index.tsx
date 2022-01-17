import {
  CenteredPageContainer,
  Button,
  PageHeading,
  TextField,
} from '../../components';
import { useStartGame } from '../../hooks';
import { MainContainer } from './styled';

export const SetupSingleMode = () => {
  const { isLoading, setName, startGame } = useStartGame();
  return (
    <CenteredPageContainer isLoading={isLoading}>
      <PageHeading>Enter Your Name</PageHeading>
      <MainContainer>
        <TextField
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Name:"
        />
        <Button onClick={startGame} className="button">
          START
        </Button>
      </MainContainer>
    </CenteredPageContainer>
  );
};
