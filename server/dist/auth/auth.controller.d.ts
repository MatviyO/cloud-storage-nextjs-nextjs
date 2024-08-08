import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { AuthService } from '@app/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<import("./types/IUserValid").IAuth>;
    register(dto: CreateUserDto): Promise<import("./types/IUserValid").IUserRegister>;
}
