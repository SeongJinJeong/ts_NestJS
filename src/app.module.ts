import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { SayModule } from './say/say.module';

@Module({
  imports: [MoviesModule, SayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
