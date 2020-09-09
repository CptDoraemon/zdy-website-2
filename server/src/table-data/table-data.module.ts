import { Module } from '@nestjs/common';
import { TableDataController } from './table-data.controller';

@Module({
  controllers: [TableDataController]
})
export class TableDataModule {

}
