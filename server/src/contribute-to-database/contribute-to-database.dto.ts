import {MinLength} from "class-validator";

export class ContributeToDatabaseDto {
  name: string;
  email: string;

  // @MinLength(20, {
  //   message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
  // })
  note: string;
}
