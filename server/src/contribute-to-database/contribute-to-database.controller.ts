import {Body, Controller, Post, UploadedFile, UseInterceptors, ValidationPipe} from '@nestjs/common';
import {SuccessResponse} from "../utils/response-template";
import {FileInterceptor} from "@nestjs/platform-express";
import {ContributeToDatabaseDto} from "./contribute-to-database.dto";

@Controller('contribute-to-database')
export class ContributeToDatabaseController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  postForm(
    @Body(new ValidationPipe()) form: ContributeToDatabaseDto,
    @UploadedFile() file
  ): SuccessResponse<string> {
    console.log(file, form);

    return {
      status: 'ok',
      data: 'submitted'
    };
  }
}
