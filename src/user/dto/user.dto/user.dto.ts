import { IsNotEmpty, Min } from 'class-validator';

export class UserDto {
  @Min(0)
  readonly id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  isActive: boolean;
}
