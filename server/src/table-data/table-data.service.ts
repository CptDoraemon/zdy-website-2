import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {TableDataEntity} from "./table-data.entity";

@Injectable()
export class TableDataService {
  constructor(
    @InjectRepository(TableDataEntity)
    private usersRepository: Repository<TableDataEntity>,
  ) {}


  findOne(id: number): Promise<TableDataEntity> {
    return this.usersRepository.findOne(id);
  }

}
