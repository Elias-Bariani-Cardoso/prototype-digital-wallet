import { Injectable } from '@nestjs/common';
import { PaymentMethodStrategy } from '../payment-method.strategy/payment-method.strategy';

@Injectable()
export class PixStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    if (!data.pixKey) {
      throw new Error('Chave PIX é obrigatória');
    }
  }

  async process(data: any): Promise<void> {
    // Simular alguma lógica como checar duplicidade da chave
    console.log('Processando PIX com dados:', data);
  }
}



