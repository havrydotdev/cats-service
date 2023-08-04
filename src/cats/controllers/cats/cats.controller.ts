import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { UpdateCatDto } from 'src/cats/dto/update-cat.dto';
import { Cat } from 'src/cats/entities/cat.entity';
import { CatsService } from 'src/cats/services/cats/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() cat: CreateCatDto): Promise<{
    id: number;
  }> {
    const id = await this.catsService.create(cat);
    return { id };
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() cat: UpdateCatDto,
  ): Promise<{
    ok: boolean;
  }> {
    return {
      ok: await this.catsService.update(id, cat),
    };
  }
}
