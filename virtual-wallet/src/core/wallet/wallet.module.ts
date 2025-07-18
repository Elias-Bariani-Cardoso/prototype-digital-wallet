import { Module } from '@nestjs/common';
import { WalletController } from 'src/infra/http/wallet/wallet.controller';

// Handler
import { CreatePaymentMethodHandler } from 'src/application/wallet/handlers/create-payment-method.handler/create-payment-method.handler/create-payment-method.handler';
// Service (Strategy Processor)
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';

// Strategies
import { PixStrategy } from './strategies/pix.strategy/pix.strategy';
import { CreditCardStrategy } from './strategies/credit-card.strategy/credit-card.strategy';
import { BoletoStrategy } from './strategies/boleto.strategy/boleto.strategy';
import { OpenBankingStrategy } from './strategies/open-banking.strategy/open-banking.strategy';
import { CreateWalletHandler } from 'src/application/wallet/handlers/create-wallet.handler/create-wallet.handler';

@Module({
  controllers: [WalletController],
  providers: [
    CreateWalletHandler,
    CreatePaymentMethodHandler,
    PaymentMethodProcessorService,
    PixStrategy,
    CreditCardStrategy,
    BoletoStrategy,
    OpenBankingStrategy,
  ],
})
export class WalletModule {}
