import {
  Response,
} from 'express';

import { User } from '../entity/User';

import Transaction, { TxGenRequest, TxGenNext } from '../decorator/transaction';

class Service {
  @Transaction()
  async txGreenDecorator(req: TxGenRequest, res: Response, next: TxGenNext) {
    console.log('/tx/green/decorator');
    await req.queryRunner.manager.save(User, { age: 1 });
    return {status: 200, data: {message: 'ok'}};
  }

  @Transaction()
  async txRedDecorator(req: TxGenRequest, res: Response, next: TxGenNext) {
    console.log('/tx/red');
    await req.queryRunner.manager.save(User, { age: 1 });
    throw new Error('oh!!! why error occur');
  }

  @Transaction()
  async redDecorator(req: TxGenRequest, res: Response, next: TxGenNext) {
    console.log('/red');
    throw new Error('what the fuck!!!');
  }
}

const service = new Service();

export default service;