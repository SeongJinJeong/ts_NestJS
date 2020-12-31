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
import { Movie } from 'src/entities/movies.entities';
import { SayService } from 'src/say/say.service';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly MoviesService: MoviesService,
    private readonly SayService: SayService,
  ) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/hello')
  sayHello(): string {
    return this.SayService.sayHello();
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
  patch(@Param('id') movieId: number, @Body() movieData: JSON) {
    this.MoviesService.patch(movieId, movieData);
  }
}
