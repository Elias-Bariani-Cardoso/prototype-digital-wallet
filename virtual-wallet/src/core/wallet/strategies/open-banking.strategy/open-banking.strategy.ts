import { Injectable, BadRequestException } from '@nestjs/common';
import { PaymentMethodStrategy } from '../payment-method.strategy/payment-method.strategy';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { OpenBankingPaymentDataDto } from 'src/infra/http/wallet/dtos/open-banking-payment-data.dto/open-banking-payment-data.dto';

@Injectable()
export class OpenBankingStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    const dto = plainToInstance(OpenBankingPaymentDataDto, data);
    const errors = validateSync(dto);

    if (errors.length > 0) {
      const messages = errors
        .map((err) => Object.values(err.constraints || {}).join(', '))
        .join('; ');
      throw new BadRequestException(messages);
    }
  }

  async process(data: OpenBankingPaymentDataDto): Promise<void> {
    console.log('Processando pagamento via Open Banking com:', data);
  }
}
