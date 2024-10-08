import { FilesService } from '@app/files/files.service';
import { UpdateFileDto } from '@app/files/dto/update-file.dto';
import { FileType } from '@app/files/types/FileType';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    create(file: Express.Multer.File, userId: string): Promise<{
        fileName: string;
        originalName: string;
        size: number;
        mimetype: string;
        user: {
            id: string;
        };
    } & import("./entities/file.entity").FileEntity>;
    findAll(userId: string, fileType: FileType): Promise<import("./entities/file.entity").FileEntity[]>;
    findOne(id: string): string;
    update(id: string, updateFileDto: UpdateFileDto): string;
    remove(userId: string, ids: string): Promise<import("typeorm").UpdateResult>;
}
