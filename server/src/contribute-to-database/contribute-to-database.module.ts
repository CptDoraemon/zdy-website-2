import { Module } from '@nestjs/common';
import { ContributeToDatabaseController } from './contribute-to-database.controller';

@Module({
  controllers: [ContributeToDatabaseController]
})
export class ContributeToDatabaseModule {}
