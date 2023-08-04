import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CatsService } from 'src/cats/services/cats/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() cat: CreateCatDto): CreateCatDto {
    return cat;
  }

  @Get('env')
  getEnv(): string {
    return process.env.DB_PASSWORD;
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): string {
    return `This action returns cat with id == ${id}`;
  }
}
