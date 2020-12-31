import { Controller, Get } from '@nestjs/common';
import { SayService } from './say.service';

@Controller('say')
export class SayController {
  constructor(private readonly SayService: SayService) {}

  @Get()
  sayHello() {
    return this.SayService.sayHello();
  }
}
