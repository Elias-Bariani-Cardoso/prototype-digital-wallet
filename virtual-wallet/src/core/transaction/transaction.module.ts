
import { Module } from '@nestjs/common';
import { TransactionController } from 'src/infra/http/transaction/transaction.controller';
import { AuthorizeTransactionHandler } from 'src/application/transaction/handlers/authorize-transaction.handler/authorize-transaction.handler';
@Module({
  controllers: [TransactionController],
  providers: [AuthorizeTransactionHandler],
})
export class TransactionModule {}
