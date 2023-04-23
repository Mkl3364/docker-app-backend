import { Min, IsNotEmpty } from 'class-validator';

export class LikeDto {
  @Min(0)
  readonly id: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  content: string;
}
