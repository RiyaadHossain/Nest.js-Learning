import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    const data = await this.userService.findAll();
    return {
      success: true,
      message: 'Users retrieved successfully',
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.userService.findOne(+id);
    return {
      success: true,
      message: 'Users retrieved successfully',
      data,
    };
  }

  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const data = await this.userService.create(createUserDto);
    return {
      success: true,
      message: 'Users created successfully',
      data,
    };
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.userService.update(+id, updateUserDto);
    return {
      success: true,
      message: `User #${id} updated successfully`,
      data,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const data = await this.userService.remove(+id);
    return {
      success: true,
      message: `User #${id} deleted successfully`,
      data,
    };
  }
}
