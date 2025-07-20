import { Injectable, BadRequestException } from '@nestjs/common';
import { PaymentMethodStrategy } from '../payment-method.strategy/payment-method.strategy';
import { CreditCardPaymentDataDto } from 'src/infra/http/wallet/dtos/credit-card-payment-data.dto/credit-card-payment-data.dto';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class CreditCardStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    const dto = plainToInstance(CreditCardPaymentDataDto, data);
    const errors = validateSync(dto);

    if (errors.length > 0) {
      const messages = errors
        .map((err) => Object.values(err.constraints || {}).join(', '))
        .join('; ');
      throw new BadRequestException(messages);
    }
  }

  async process(data: CreditCardPaymentDataDto): Promise<void> {
    console.log('Processando cartão de crédito com dados:', data);
    // Aqui será chamado o serviço externo de pagamento
  }
}
