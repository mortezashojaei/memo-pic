import { Container } from './styled';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export const GameCards = () => {
  return (
    <Container>
      {items.map((item) => (
        <div key={item} />
      ))}
    </Container>
  );
};
