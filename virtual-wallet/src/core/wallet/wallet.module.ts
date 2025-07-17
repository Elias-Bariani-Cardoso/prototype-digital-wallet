import { Module } from '@nestjs/common';
import { WalletController } from 'src/infra/http/wallet/wallet.controller';
import { CreateWalletHandler } from 'src/application/wallet/handlers/create-wallet.handler/create-wallet.handler';

@Module({
  controllers: [WalletController],
  providers: [CreateWalletHandler],
})
export class WalletModule {}
