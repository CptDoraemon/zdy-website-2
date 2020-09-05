import {MinLength, MaxLength} from "class-validator";

export class ContributeToDatabaseDto {
  @MaxLength(200)
  name: string;

  @MaxLength(200)
  email: string;

  @MinLength(20)
  note: string;
}
