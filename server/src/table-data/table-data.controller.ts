import {Controller, Get, Query, Req} from '@nestjs/common';
import {SuccessResponse} from "../utils/response-template";
import {TableDataDto} from "./table-data.dto";
import { Request } from 'express';

@Controller('table-data')
export class TableDataController {

  private mockTableData = [{"id":1,"sex":1,"age":59,"severity":1,"death":1,"PT":1,"D":2,"FIB":1,"drug":1},{"id":2,"sex":2,"age":60,"severity":1,"death":1,"PT":1,"D":2,"FIB":2,"drug":3},{"id":3,"sex":1,"age":61,"severity":1,"death":1,"PT":1,"D":2,"FIB":1,"drug":1},{"id":4,"sex":2,"age":62,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":5,"sex":1,"age":63,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":6,"sex":2,"age":64,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":7,"sex":1,"age":65,"severity":3,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":8,"sex":2,"age":66,"severity":3,"death":0,"PT":2,"D":1,"FIB":3,"drug":4},{"id":9,"sex":1,"age":67,"severity":3,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":10,"sex":1,"age":68,"severity":1,"death":1,"PT":1,"D":2,"FIB":1,"drug":1},{"id":11,"sex":2,"age":69,"severity":1,"death":1,"PT":1,"D":2,"FIB":2,"drug":3},{"id":12,"sex":1,"age":70,"severity":1,"death":1,"PT":1,"D":2,"FIB":1,"drug":1},{"id":13,"sex":2,"age":71,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":14,"sex":1,"age":72,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":15,"sex":2,"age":73,"severity":2,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":16,"sex":1,"age":74,"severity":3,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":17,"sex":2,"age":75,"severity":3,"death":0,"PT":2,"D":1,"FIB":3,"drug":4},{"id":18,"sex":1,"age":76,"severity":3,"death":1,"PT":2,"D":1,"FIB":2,"drug":4},{"id":19,"sex":1,"age":77,"severity":1,"death":1,"PT":1,"D":2,"FIB":1,"drug":1},{"id":20,"sex":2,"age":78,"severity":1,"death":1,"PT":1,"D":2,"FIB":2,"drug":3}];
  private totalPages = 20;
  private totalRows = 345;

  @Get()
  async getData(
    @Req() req: Request,
    @Query('page') page: number,
  ): Promise<SuccessResponse<TableDataDto>> {

    console.log(req.query);
    console.log(page);

    return {
      status: 'ok',
      data: {
        tableData: this.mockTableData.slice(),
        currentPage: page,
        totalPages: this.totalPages,
        totalRows: this.totalRows,
      },
    };
  }
}
