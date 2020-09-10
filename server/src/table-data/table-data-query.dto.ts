import {IsArray, IsInt, IsOptional, IsString, ValidateIf} from "class-validator";
import {Transform, Type} from "class-transformer";

export class TableDataQueryDto {
  sortBy: string;

  sortOrder: string;

  rowPerPage: number;

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  @IsOptional()
  age: number[];

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  @IsOptional()
  sex: number;

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  @IsOptional()
  severity: number[];

  @IsInt()
  @Transform((value: string) => parseFloat(value))
  @IsOptional()
  page: number;
}
