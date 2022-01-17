import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateTimeEntity } from './dateTimeEntity';
import { SinglePlayCards } from './SinglePlayCards.entity';

@Entity('single_player_game', { orderBy: { id: 'ASC' } })
export class SinglePlayerGame extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  finished_at?: Date = new Date(3000, 1, 1, 1, 1);

  @OneToMany(() => SinglePlayCards, (cards) => cards.id)
  cards: SinglePlayCards[];
}
