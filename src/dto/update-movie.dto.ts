import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './creat-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
