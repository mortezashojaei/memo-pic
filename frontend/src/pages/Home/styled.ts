import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  color: #17c0eb;
  margin-bottom: 0rem;
  font-size: 5rem;
  font-weight: 700;
  height: 20%;
  font-style: oblique;
`;

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
