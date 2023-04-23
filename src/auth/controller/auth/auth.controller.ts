import { Controller, HttpCode, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() userRequest: User): any {
    return this.authService.signIn(userRequest);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() userRequest: User) {
    return this.authService.signUp(userRequest);
  }
}
