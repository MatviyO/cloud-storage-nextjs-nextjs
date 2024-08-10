import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { fileStorage } from '@app/files/storage';
import { ControllerWithApiTags } from '@app/auth/decorators/controller-with-api-tags.decorator';
import { UserId } from '@app/auth/decorators/user-id.decorator';
import { AuthGuardWithBearer } from '@app/auth/decorators/auth.decorator';
import { FilesService } from '@app/files/files.service';
import { UpdateFileDto } from '@app/files/dto/update-file.dto';
import { FileType } from '@app/files/types/FileType';

@ControllerWithApiTags('files')
@AuthGuardWithBearer()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: fileStorage,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })],
      }),
    )
    file: Express.Multer.File,
    @UserId() userId: string,
  ) {
    return this.filesService.create(file, userId);
  }

  @Get()
  findAll(@UserId() userId: string, @Query('fileType') fileType: FileType) {
    return this.filesService.findAll(userId, fileType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete()
  remove(@UserId() userId: string, @Query('ids') ids: string) {
    return this.filesService.remove(userId, ids);
  }
}
