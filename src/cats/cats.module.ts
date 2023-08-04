import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
