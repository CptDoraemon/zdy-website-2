import { Module } from '@nestjs/common';
import { ContributeToDatabaseController } from './contribute-to-database.controller';
import {FileValidation} from "../utils/file-validation";

@Module({
  providers: [FileValidation],
  controllers: [ContributeToDatabaseController]
})
export class ContributeToDatabaseModule {}
