import { IUserLogin } from '@app/auth/types/IUserValid';
export declare class UserLoginDto implements IUserLogin {
    email: string;
    password: string;
}
