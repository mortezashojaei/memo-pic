import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .button {
    width: 60%;
    height: 6rem;
    background-color: #00b894;
    color: white;
    font-size: 2rem;
    :hover {
      background-color: #55efc4;
    }
  }
`;
