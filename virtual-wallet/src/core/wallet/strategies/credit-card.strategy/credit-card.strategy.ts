import { Injectable } from '@nestjs/common'
import { PaymentMethodStrategy } from "../payment-method.strategy/payment-method.strategy";

@Injectable()
export class CreditCardStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    if (!data.cardNumber || !data.cvv) {
      throw new Error('Dados de cartão inválidos.');
    }

    if (String(data.cardNumber).length < 13 || String(data.cvv).length !== 3) {
      throw new Error('Número do cartão ou CVV inválido.');
    }
  }

  async process(data: any): Promise<void> {
    console.log('Processando cartão de crédito...');
  }
}