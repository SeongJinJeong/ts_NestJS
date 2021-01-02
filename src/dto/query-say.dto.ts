import { IsNumber, IsString, Max, Min } from 'class-validator';

export class QueryDTO {
  @IsString()
  readonly msg: string;

  @IsNumber()
  @Min(0)
  @Max(210)
  readonly num: number;
}
