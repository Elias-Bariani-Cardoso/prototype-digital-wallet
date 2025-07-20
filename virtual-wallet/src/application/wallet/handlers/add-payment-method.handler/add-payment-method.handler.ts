import { Injectable } from '@nestjs/common';
import { AddPaymentMethodCommand } from 'src/application/wallet/commands/add-payment-method.command/add-payment-method.command';
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';

@Injectable()
export class AddPaymentMethodHandler {
  constructor(
    private readonly processor: PaymentMethodProcessorService,
  ) {}

  async execute(command: AddPaymentMethodCommand): Promise<void> {
  await this.processor.handle(command.type, command.data);
  }
}
