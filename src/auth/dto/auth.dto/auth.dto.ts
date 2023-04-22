import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  password: string;
}
