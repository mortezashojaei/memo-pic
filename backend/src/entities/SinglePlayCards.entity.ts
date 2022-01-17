import {
  CardPositionType,
  CardImageIdType,
  CardImageIdes,
  CardPositions,
} from '../types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SinglePlayerGame } from './SinglePlayerGame.entity';

@Entity('single_play_cards', { orderBy: { id: 'ASC' } })
export class SinglePlayCards {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'enum', enum: CardImageIdes })
  imageId: CardImageIdType;

  @Column()
  isLocked: boolean = true;

  @ManyToOne(() => SinglePlayerGame, (game) => game.cards)
  @JoinColumn()
  game: SinglePlayerGame;

  @Column({ type: 'enum', enum: CardPositions })
  position1: CardPositionType;

  @Column({ type: 'enum', enum: CardPositions })
  position2: CardPositionType;
}
