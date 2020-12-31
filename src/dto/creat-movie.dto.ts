import { IsString, IsNumber } from 'class-validator';
export class CreateMovieDTO {
  @IsString()
  private readonly title: string;

  @IsString({ each: true })
  private readonly genres: string[];

  @IsNumber()
  private readonly year: number;
}
