import { CardPositionType, CardImageIdType } from '../types';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SinglePlayerGame } from './SinglePlayerGame.entity';

@Entity('single_play_cards', { orderBy: { id: 'ASC' } })
export class SinglePlayCards {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  imageId: CardImageIdType;

  @OneToOne(() => SinglePlayerGame)
  @JoinColumn()
  game: SinglePlayerGame;

  @Column()
  position1: CardPositionType;

  @Column()
  position2: CardPositionType;
}
