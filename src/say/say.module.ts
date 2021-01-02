import { Global, Module } from '@nestjs/common';
import { SayController } from './say.controller';
import { SayService } from './say.service';

@Global()
@Module({
  imports: [],
  controllers: [SayController],
  providers: [SayService],
  exports: [SayService],
})
export class SayModule {}
