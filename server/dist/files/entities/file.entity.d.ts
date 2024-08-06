import { UserEntity } from '@app/users/entities/user.entity';
export declare class FileEntity {
    id: string;
    fileName: string;
    originalName: string;
    size: number;
    mimetype: string;
    deletedAt?: Date;
    createdAt: Date;
    user: UserEntity;
}
