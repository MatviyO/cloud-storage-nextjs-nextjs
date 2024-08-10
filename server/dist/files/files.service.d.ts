import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from '@app/files/entities/file.entity';
import { Repository } from 'typeorm';
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
    findAll(): Promise<FileEntity[]>;
    findOne(id: number): string;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(id: number): string;
}
