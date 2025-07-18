import { Injectable } from '@nestjs/common';
import { PaymentMethodStrategy } from "../payment-method.strategy/payment-method.strategy";

@Injectable()
export class BoletoStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    if (!data.nome || !data.cpf) {
      throw new Error('Nome e CPF são obrigatórios para boleto.');
    }
  }

  async process(data: any): Promise<void> {
    console.log('Gerando boleto...');
  }
}