import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './../../entities/cat.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('CatsService', () => {
  let service: CatsService;
  let catsRepo: Repository<Cat>;

  const CATS_REPOSITORY_TOKEN = getRepositoryToken(Cat);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: CATS_REPOSITORY_TOKEN,
          useValue: {
            update: jest.fn(),
            findOneBy: jest.fn(),
            insert: jest.fn(),
            find: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
    catsRepo = module.get<Repository<Cat>>(CATS_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('carsRepo shoukd be defined', () => {
    expect(catsRepo).toBeDefined();
  });
});
