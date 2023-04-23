import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;
}
