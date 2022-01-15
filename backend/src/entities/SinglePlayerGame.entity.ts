import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateTimeEntity } from './DateTimeEntity';

@Entity('single_player_game', { orderBy: { id: 'ASC' } })
export class SinglePlayerGame extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;
}
