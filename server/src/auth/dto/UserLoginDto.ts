import { ApiProperty } from '@nestjs/swagger';
import { IUserLogin } from '@app/auth/types/IUserValid';

export class UserLoginDto implements IUserLogin {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
