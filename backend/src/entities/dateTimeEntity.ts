import { CreateDateColumn } from 'typeorm';

export class DateTimeEntity {
  @CreateDateColumn()
  created_at: Date;
}
