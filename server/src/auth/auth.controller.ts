import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { AuthService } from '@app/auth/auth.service';
import { UserLoginDto } from '@app/auth/dto/UserLoginDto';
import { LocalAuthGuard } from '@app/auth/guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    type: UserLoginDto,
  })
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }
}
