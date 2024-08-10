import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { UpdateUserDto } from '@app/users/dto/update-user.dto';
import { ControllerWithApiTags } from '@app/auth/decorators/controller-with-api-tags.decorator';
import { JwtAuthGuard } from '@app/auth/guards/jwt.guard';
import { UserId } from '@app/auth/decorators/user-id.decorator';
import { UsersService } from '@app/users/users.service';
import { CreateUserDto } from '@app/users/dto/create-user.dto';

@ControllerWithApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@UserId() id: string) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
