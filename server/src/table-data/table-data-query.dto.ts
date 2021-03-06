import {IsIn, IsInt, IsOptional, IsString} from "class-validator";
import {Transform} from "class-transformer";

export class TableDataQueryDto {
  @IsString()
  sortBy = 'id';

  @IsIn(['ASC' , 'DESC'])
  @Transform((value: string) => value.toUpperCase())
  sortOrder = 'ASC';

  @IsInt()
  @Transform((value: string) => parseFloat(value))
  rowPerPage = 20;

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  age = [1, 100];

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  sex = [1, 2];

  @IsInt({ each: true })
  @Transform((value: string) => {
    const strArray = value.split(',');
    return strArray.map(str => parseFloat(str))
  })
  severity = [1, 2, 3];

  @IsInt()
  @Transform((value: string) => parseFloat(value))
  page = 1;
}
