import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from '@app/files/entities/file.entity';
import { Repository } from 'typeorm';
import { FileType } from '@app/files/types/FileType';
export declare class FilesService {
    private fileRepository;
    constructor(fileRepository: Repository<FileEntity>);
    create(file: Express.Multer.File, userId: string): Promise<{
        fileName: string;
        originalName: string;
        size: number;
        mimetype: string;
        user: {
            id: string;
        };
    } & FileEntity>;
    findAll(userId: string, fileType: FileType): Promise<FileEntity[]>;
    findOne(id: number): string;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(userId: string, ids: string): Promise<import("typeorm").UpdateResult>;
}
