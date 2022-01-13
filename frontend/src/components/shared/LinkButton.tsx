import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  :hover,
  :focus,
  :active {
    text-decoration: none;
  }
`;
