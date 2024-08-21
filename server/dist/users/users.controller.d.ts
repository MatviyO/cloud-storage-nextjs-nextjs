import { UpdateUserDto } from '@app/users/dto/update-user.dto';
import { UsersService } from '@app/users/users.service';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    findAll(): string;
    getMe(id: string): Promise<import("./entities/user.entity").UserEntity>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
