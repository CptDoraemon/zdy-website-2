import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, In } from 'typeorm';
import {TableDataEntity} from "./table-data.entity";

@Injectable()
export class TableDataService {
  constructor(
    @InjectRepository(TableDataEntity)
    private repository: Repository<TableDataEntity>,
  ) {}

  async getTableData(sortBy, sortOrder, rowPerPage, age, sex, severity, page) {
    const skip = (page - 1) * rowPerPage;

    const result = await this.repository.find({
      where: {
        sex: In(sex),
        severity: In(severity),
        age: Between(age[0], age[1])
      },
      order: {
        [sortBy]: sortOrder
      },
      skip,
      take: rowPerPage
    });

    const totalRows = await this.repository.count({
      where: {
        sex: In(sex),
        severity: In(severity),
        age: Between(age[0], age[1])
      },
    });

    return {
      result,
      totalRows
    }
  }

}
