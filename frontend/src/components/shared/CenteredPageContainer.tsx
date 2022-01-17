import styled from 'styled-components';

export const CenteredPageContainer = styled.section<{
  isLoading?: boolean;
}>`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  filter: ${(props) => (props.isLoading ? 'blur(5px)' : '')};
`;
