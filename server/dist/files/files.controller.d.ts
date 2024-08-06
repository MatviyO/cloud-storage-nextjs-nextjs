import { FilesService } from './files.service';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    create(file: Express.Multer.File): Express.Multer.File;
    findAll(): Promise<import("./entities/file.entity").FileEntity[]>;
    findOne(id: string): string;
    update(id: string, updateFileDto: UpdateFileDto): string;
    remove(id: string): string;
}
