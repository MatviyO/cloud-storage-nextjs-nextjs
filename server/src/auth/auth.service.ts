import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '@app/users/users.service';
import { IUserRegister, IUserValid } from '@app/auth/types/IUserValid';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@app/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<IUserValid | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async register(dto: CreateUserDto): Promise<IUserRegister> {
    try {
      const existingUser = await this.usersService.findByEmail(dto.email);
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }
      const user = await this.usersService.create(dto);
      const token = this.jwtService.sign({ email: user.email, id: user.id });
      return { email: user.email, fullName: user.fullName, token };
    } catch (e) {
      if (e instanceof ConflictException) {
        throw e;
      }
      console.log(e);
      throw new ForbiddenException('Error creating user');
    }
  }

  async login(user: UserEntity) {
    return {
      token: this.jwtService.sign({ email: user.email, id: user.id }),
    };
  }
}
