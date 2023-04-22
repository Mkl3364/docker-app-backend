import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/service/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(userRequest: User) {
    const user = await this.usersService.findById(1);
    if (user?.password !== userRequest.password) {
      throw new UnauthorizedException();
    }
    const payload = {
      username: userRequest.firstName,
      sub: userRequest.password,
    };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
