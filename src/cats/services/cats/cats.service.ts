import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { UpdateCatDto } from 'src/cats/dto/update-cat.dto';
import { Cat } from 'src/cats/entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepo: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepo.find({
      order: {
        id: 'ASC',
      },
    });
  }

  findById(id: number): Promise<Cat> {
    return this.catsRepo.findOneBy({ id });
  }

  async update(id: number, cat: UpdateCatDto): Promise<boolean> {
    const res = await this.catsRepo.update(id, cat);
    if (res.affected !== 1) {
      throw new HttpException('Cat does not exist', HttpStatus.BAD_REQUEST);
    }

    return true;
  }

  async create(cat: CreateCatDto): Promise<number> {
    const res = await this.catsRepo.insert(cat);
    return res.identifiers[0].id as number;
  }

  async remove(id: number): Promise<void> {
    await this.catsRepo.delete(id);
  }
}
