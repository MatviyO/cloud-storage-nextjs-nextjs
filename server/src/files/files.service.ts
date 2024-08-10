import { Injectable } from '@nestjs/common';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from '@app/files/entities/file.entity';
import { Repository } from 'typeorm';
import { FileType } from '@app/files/types/FileType';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  create(file: Express.Multer.File, userId: string) {
    return this.fileRepository.save({
      fileName: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      user: { id: userId },
    });
  }

  findAll(userId: string, fileType: FileType) {
    const qb = this.fileRepository.createQueryBuilder('file');
    qb.where('file.userId = :userId', { userId });
    if (fileType === FileType.IMAGE) {
      qb.andWhere('file.mimetype ILIKE :type', { type: '%image%' });
    }
    if (fileType === FileType.TRASH) {
      qb.withDeleted().andWhere('file.deletedAt IS NOT NULL');
    }
    return qb.getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  async remove(userId: string, ids: string) {
    const idsArray = ids.split(',');
    const qb = this.fileRepository.createQueryBuilder('file');
    qb.where('id IN (:ids) AND file.userId = :userId', {
      ids: idsArray,
      userId,
    });
    return qb.softDelete().execute();
  }
}
