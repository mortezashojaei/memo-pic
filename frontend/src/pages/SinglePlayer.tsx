import { CenteredPageContainer, PageHeading } from '../components';
import { useTimer } from '../hooks';

export const SinglePlayer = () => {
  const [second, minute] = useTimer();

  return (
    <CenteredPageContainer>
      <PageHeading>
        2/16 - {minute}:{second}
      </PageHeading>
    </CenteredPageContainer>
  );
};
