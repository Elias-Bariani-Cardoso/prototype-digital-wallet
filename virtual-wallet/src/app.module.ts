import { Module } from '@nestjs/common';
import { WalletModule } from './core/wallet/wallet.module';
import { TransactionModule } from './core/transaction/transaction.module';

@Module({
  imports: [WalletModule, TransactionModule],
})
export class AppModule {}
