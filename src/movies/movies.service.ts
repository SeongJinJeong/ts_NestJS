import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from 'src/entities/movies.entities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie: Movie = this.movies.find((aMovie) => aMovie.id === id);
    if (movie === undefined) {
      throw new NotFoundException(`I Can't Find the Movie with ID : ${id}`);
    }
    return movie;
  }

  create(data): void {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
    });
  }

  delete(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  patch(id: number, updateData): void {
    const movie: Movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
