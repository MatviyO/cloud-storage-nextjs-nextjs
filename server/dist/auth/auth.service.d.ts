import { UsersService } from '@app/users/users.service';
import { IAuth, IUserRegister, IUserValid } from '@app/auth/types/IUserValid';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@app/users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<IUserValid | null>;
    register(dto: CreateUserDto): Promise<IUserRegister>;
    login(user: UserEntity): Promise<IAuth>;
}
