import { Module } from '@nestjs/common';
import { WalletModule } from './core/wallet/wallet.module';
import { WalletController } from './infra/http/wallet/wallet.controller';
import { TransactionModule } from './core/transaction/transaction.module';
import { TransactionController } from './infra/http/transaction/transaction.controller';

@Module({
  imports: [WalletModule, TransactionModule],
})
export class AppModule {}
