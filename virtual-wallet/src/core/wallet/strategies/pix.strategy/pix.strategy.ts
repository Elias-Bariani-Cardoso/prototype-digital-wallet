import { Injectable, BadRequestException } from '@nestjs/common';
import { PaymentMethodStrategy } from '../payment-method.strategy/payment-method.strategy';
import { PixPaymentDataDto } from 'src/infra/http/wallet/dtos/pix-payment-data.dto/pix-payment-data.dto';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class PixStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    const dto = plainToInstance(PixPaymentDataDto, data);
    const errors = validateSync(dto);

    if (errors.length > 0) {
      const messages = errors
        .map((err) => Object.values(err.constraints || {}).join(', '))
        .join('; ');
      throw new BadRequestException(messages);
    }
  }

  async process(data: PixPaymentDataDto): Promise<void> {
    console.log('Processando PIX com dados:', data);
  }
}
