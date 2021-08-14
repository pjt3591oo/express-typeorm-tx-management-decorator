import { Request, Response } from "express";
import { Connection, getConnection, QueryRunner } from "typeorm";

export interface TxGenRequest extends Request {
  queryRunner: QueryRunner; 
}

export type TxGenNext = ({ status, message }: {status: number, message: string}) => void;

function Transaction() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originMethod = descriptor.value
    descriptor.value = async function (req: TxGenRequest, res: Response, next: TxGenNext) {
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
    
      await queryRunner.connect();
      await queryRunner.startTransaction();
      
      req.queryRunner = queryRunner;
      try {
        let result = await originMethod.apply(this, [req, res, next])
        if (result) {
          await queryRunner.commitTransaction();
          await req.queryRunner.release();
          return res.status(result.status).json(result.body);
        }
      } catch (err) {
        await req.queryRunner.rollbackTransaction();
        await req.queryRunner.release();
        return next({ status: 500, message: err.message });
      }
    }
  };
}

export default Transaction;