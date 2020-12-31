import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { SayService } from './say/say.service';
import { SayController } from './say/say.controller';

@Module({
  imports: [],
  controllers: [MoviesController, SayController],
  providers: [MoviesService, SayService],
})
export class AppModule {}
