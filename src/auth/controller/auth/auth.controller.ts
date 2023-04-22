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
}
