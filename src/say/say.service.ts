import { Injectable } from '@nestjs/common';

@Injectable()
export class SayService {
  sayHello() {
    return ' Hello ~ ';
  }
}
