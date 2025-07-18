import { Injectable } from '@nestjs/common';
import { PaymentMethodStrategy } from '../../strategies/payment-method.strategy/payment-method.strategy';
import { PaymentMethodType } from '../../entities/payment-method.entity/payment-method.entity';
import { PixStrategy } from '../../strategies/pix.strategy/pix.strategy';
import { CreditCardStrategy } from '../../strategies/credit-card.strategy/credit-card.strategy';
import { BoletoStrategy } from '../../strategies/boleto.strategy/boleto.strategy';
import { OpenBankingStrategy } from '../../strategies/open-banking.strategy/open-banking.strategy';

@Injectable()
export class PaymentMethodProcessorService {
  private readonly strategies = new Map<PaymentMethodType, PaymentMethodStrategy>();

  constructor(
    pix: PixStrategy,
    creditCard: CreditCardStrategy,
    boleto: BoletoStrategy,
    openBanking: OpenBankingStrategy,
  ) {
    this.strategies.set(PaymentMethodType.PIX, pix);
    this.strategies.set(PaymentMethodType.CREDIT_CARD, creditCard);
    this.strategies.set(PaymentMethodType.BOLETO, boleto);
    this.strategies.set(PaymentMethodType.OPEN_BANKING, openBanking);
  }

  async handle(data: { type: PaymentMethodType; [key: string]: any }): Promise<void> {
    const strategy = this.strategies.get(data.type);
    if (!strategy) {
      throw new Error(`Estratégia não implementada para o tipo ${data.type}`);
    }

    strategy.validate(data);
    await strategy.process(data);
  }
}
