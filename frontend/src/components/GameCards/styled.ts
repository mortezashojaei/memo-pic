import styled from 'styled-components';

export const Container = styled.section`
  width: 40rem;
  height: 40rem;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media only screen and (max-width: 425px) {
    width: 32rem;
    height: 32rem;
  }
`;

export const CardItem = styled.div<{ background?: string }>`
  cursor: pointer;
  background: #00b894;
  margin: 0.2rem;
  :hover {
    background: ${(props) => !props.background && '#00b850'};
  }
  background: ${(props) =>
    props.background && `url(${props.background})`};
  background-size: cover;
`;
