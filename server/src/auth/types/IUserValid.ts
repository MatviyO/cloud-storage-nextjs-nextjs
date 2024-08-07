import { UserEntity } from '@app/users/entities/user.entity';

export interface IUserValid extends Omit<UserEntity, 'password'> {}

export interface IUserRegister extends Pick<UserEntity, 'email' | 'fullName'> {
  token: string;
}

export interface IUserLogin extends Pick<UserEntity, 'email' | 'password'> {}
