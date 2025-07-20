import { Injectable, BadRequestException } from '@nestjs/common';
import { PaymentMethodStrategy } from "../payment-method.strategy/payment-method.strategy";
import { BoletoPaymentDataDto } from 'src/infra/http/wallet/dtos/boleto-payment-data.dto/boleto-payment-data.dto';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class BoletoStrategy implements PaymentMethodStrategy {
  validate(data: any): void {
    const dto = plainToInstance(BoletoPaymentDataDto, data);
    const errors = validateSync(dto);

    if (errors.length > 0) {
      const messages = errors
        .map((err) => Object.values(err.constraints || {}).join(', '))
        .join('; ');
      throw new BadRequestException(messages);
    }
  }

  async process(data: BoletoPaymentDataDto): Promise<void> {
    console.log('Gerando boleto com os dados:', data);
    // Aqui será realizado a lógica real( gerar código de barras, integração com serviços externos)
  }
}
