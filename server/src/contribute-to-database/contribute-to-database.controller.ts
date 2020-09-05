import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {SuccessResponse} from "../utils/response-template";
import {FileInterceptor} from "@nestjs/platform-express";
import {ContributeToDatabaseDto} from "./contribute-to-database.dto";
import {FileValidation} from "../utils/file-validation";

@Controller('contribute-to-database')
export class ContributeToDatabaseController {
  private maxFileSize = 5 * 1024 * 1024; //5mb

  constructor(private fileValidation: FileValidation) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  postForm(
    @Body() form: ContributeToDatabaseDto,
    @UploadedFile() file,
  ): SuccessResponse<string> {
    const validatedFile = this.fileValidation.validate(file, this.maxFileSize, ['.csv', '.txt']);

    return {
      status: 'ok',
      data: 'submitted'
    };
  }
}
