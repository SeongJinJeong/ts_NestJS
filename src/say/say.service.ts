import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { QueryEntities } from 'src/entities/query.entities';

@Injectable()
export class SayService {
  sayHello(req: object) {
    return req.toString();
  }

  queryTest(query: any) {
    if (typeof query.num !== 'number') {
      const newQuery = {
        ...query,
        num: parseInt(query.num),
      };
      return newQuery;
    }
  }
}
