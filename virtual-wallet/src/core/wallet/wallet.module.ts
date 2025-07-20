import { Module } from '@nestjs/common';
import { WalletController } from 'src/infra/http/wallet/controllers/wallet.controller/wallet.controller';
import { PaymentMethodController } from 'src/infra/http/wallet/controllers/payment-method.controller/payment-method.controller';

// Handler
import { AddPaymentMethodHandler } from 'src/application/wallet/handlers/add-payment-method.handler/add-payment-method.handler';

// Service (Strategy Processor)
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';
import { PaymentMethodStrategyResolverService } from './services/payment-method-strategy-resolver.service/payment-method-strategy-resolver.service';


// Strategies
import { PixStrategy } from './strategies/pix.strategy/pix.strategy';
import { CreditCardStrategy } from './strategies/credit-card.strategy/credit-card.strategy';
import { BoletoStrategy } from './strategies/boleto.strategy/boleto.strategy';
import { OpenBankingStrategy } from './strategies/open-banking.strategy/open-banking.strategy';
import { CreateWalletHandler } from 'src/application/wallet/handlers/create-wallet.handler/create-wallet.handler';

@Module({
  controllers: [
    WalletController,
    PaymentMethodController,
  ],
  providers: [
    CreateWalletHandler,
    AddPaymentMethodHandler,
    PaymentMethodProcessorService,
    PaymentMethodStrategyResolverService,
    PixStrategy,
    CreditCardStrategy,
    BoletoStrategy,
    OpenBankingStrategy,
  ],
})
export class WalletModule {}
