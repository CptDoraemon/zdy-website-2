import { Test, TestingModule } from '@nestjs/testing';
import { ContributeToDatabaseController } from './contribute-to-database.controller';

describe('ContributeToDatabaseController', () => {
  let controller: ContributeToDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContributeToDatabaseController],
    }).compile();

    controller = module.get<ContributeToDatabaseController>(ContributeToDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
