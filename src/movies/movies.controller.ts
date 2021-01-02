import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { CreateMovieDTO } from 'src/dto/creat-movie.dto';
import { UpdateMovieDTO } from 'src/dto/update-movie.dto';
import { Movie } from 'src/entities/movies.entities';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.MoviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.MoviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    return this.MoviesService.delete(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() movieData: UpdateMovieDTO) {
    this.MoviesService.patch(movieId, movieData);
  }
}
