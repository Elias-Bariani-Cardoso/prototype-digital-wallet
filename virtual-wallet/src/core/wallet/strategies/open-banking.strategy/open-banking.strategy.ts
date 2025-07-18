import { Injectable } from '@nestjs/common'
import { PaymentMethodStrategy } from "../payment-method.strategy/payment-method.strategy";

@Injectable()
export class OpenBankingStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    if (!data.bank || !data.accountId) {
      throw new Error('Dados bancários inválidos para Open Banking.');
    }
  }

  async process(data: any): Promise<void> {
    console.log('Conectando via Open Banking...');
  }
}