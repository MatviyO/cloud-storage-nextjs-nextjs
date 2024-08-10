import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from '@app/users/entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
