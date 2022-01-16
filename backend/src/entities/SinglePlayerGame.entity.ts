import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateTimeEntity } from './dateTimeEntity';

@Entity('single_player_game', { orderBy: { id: 'ASC' } })
export class SinglePlayerGame extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  finished_at?: Date = new Date(3000, 1, 1, 1, 1);
}
