import styled from 'styled-components';

export const Container = styled.section`
  width: 40rem;
  height: 40rem;
  display: grid;
  grid-template-columns: auto auto auto auto;

  div {
    cursor: pointer;
    background: #00b894;
    margin: 0.2rem;
    :hover {
      background: #00b850;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 32rem;
    height: 32rem;
  }
`;
