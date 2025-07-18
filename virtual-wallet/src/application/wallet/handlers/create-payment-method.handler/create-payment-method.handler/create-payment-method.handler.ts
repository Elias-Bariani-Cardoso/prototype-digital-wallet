import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodCommand } from 'src/application/wallet/commands/create-payment-method.command/create-payment-method.command/create-payment-method.command';
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';

@Injectable()
export class CreatePaymentMethodHandler {
  constructor(
    private readonly processor: PaymentMethodProcessorService,
  ) {}

  async execute(command: CreatePaymentMethodCommand): Promise<void> {
    await this.processor.handle({
      type: command.type,
      ...command.data,
    });
  }
}
