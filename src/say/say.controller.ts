import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { QueryDTO } from 'src/dto/query-say.dto';
import { SayService } from './say.service';

@Controller('say')
export class SayController {
  constructor(private readonly SayService: SayService) {}

  @Get()
  sayHello(@Req() request: Request) {
    console.log(request);
    return this.SayService.sayHello(request);
  }

  @Get('/redirect')
  @Redirect('https://naver.com')
  redirectToNaver() {}

  @Get('/query')
  queryTest(@Query() query: object): any {
    return this.SayService.queryTest(query);
  }
}
