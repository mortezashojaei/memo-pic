import { FC } from 'react';
import styled from 'styled-components';

type Props = { name: string; label: string; className?: string };

export const TextField: FC<Props> = ({
  name,
  label,
  className = '',
}) => (
  <div className={className}>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type="text" />
  </div>
);

const Input = styled.input`
  background: white;
  border: 0.15rem solid white;
  height: 3rem;
  width: 100%;
  border-radius: 0.2rem;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem 0;
  box-sizing: border-box;

  ::placeholder {
    color: #3d3d3d;
  }
  :focus {
    outline: none;
    border-color: #17c0eb;
  }
`;

const Label = styled.label`
  font-size: 2rem;
  text-align: left;
  color: #00b894;
  font-weight: 600;
`;
