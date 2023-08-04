import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
