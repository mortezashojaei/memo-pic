import { FC, useState } from 'react';
import { CardItem as CardItemType } from '../../types';
import { CardItem, Container } from './styled';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

type Props = {
  cards: Array<CardItemType>;
  onAction: (first: number, second: number) => void;
};

export const GameCards: FC<Props> = ({ cards, onAction }) => {
  const [checked, setChecked] = useState<number>();
  function handleClick(item: number) {
    if (
      !cards.find(
        (card) => card.position1 === item || card.position2 === item,
      )
    ) {
      if (checked) {
        onAction(checked, item);
        setChecked(undefined);
      } else {
        setChecked(item);
      }
    }
  }

  return (
    <Container>
      {items.map((item) => (
        <CardItem
          checked={checked === item}
          background={
            cards.find(
              (card) =>
                card.position1 === item || card.position2 === item,
            )?.image
          }
          onClick={() => handleClick(item)}
          key={item}
        />
      ))}
    </Container>
  );
};
