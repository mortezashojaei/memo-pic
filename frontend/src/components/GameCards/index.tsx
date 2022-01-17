import { FC } from 'react';
import { CardItem as CardItemType } from '../../types';
import { CardItem, Container } from './styled';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

type Props = {
  cards: Array<CardItemType>;
};

export const GameCards: FC<Props> = ({ cards }) => {
  return (
    <Container>
      {items.map((item) => (
        <CardItem
          background={
            cards.find(
              (card) =>
                card.position1 === item || card.position2 === item,
            )?.image
          }
          key={item}
        />
      ))}
    </Container>
  );
};
