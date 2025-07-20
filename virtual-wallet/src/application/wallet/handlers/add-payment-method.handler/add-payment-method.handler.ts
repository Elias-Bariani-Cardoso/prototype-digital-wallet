import { Injectable } from '@nestjs/common';
import { AddPaymentMethodCommand } from 'src/application/wallet/commands/add-payment-method.command/add-payment-method.command';
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';
import { PaymentMethod } from 'src/core/wallet/entities/payment-method.entity/payment-method.entity';

@Injectable()
export class AddPaymentMethodHandler {
  constructor(
    private readonly processor: PaymentMethodProcessorService,
  ) {}

  async execute(command: AddPaymentMethodCommand): Promise<void> {
    const paymentMethod = new PaymentMethod(command.type, command.data);
    await this.processor.handle(paymentMethod);
  }
}
