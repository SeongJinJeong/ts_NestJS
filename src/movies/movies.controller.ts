import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return ' This Will list up all Movies ';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return One Movie with the id : ${id}`;
  }

  @Post()
  create() {
    return `This Will create a Movie`;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie with id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This Will Patch a movie with id : ${movieId}`;
  }
}
