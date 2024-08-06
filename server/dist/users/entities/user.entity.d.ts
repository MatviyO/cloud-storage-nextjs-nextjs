import { FileEntity } from '@app/files/entities/file.entity';
export declare class UserEntity {
    id: string;
    email: string;
    password: string;
    fullName: string;
    files: FileEntity[];
}
