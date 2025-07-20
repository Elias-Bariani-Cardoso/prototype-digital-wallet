import { Injectable } from '@nestjs/common';
import { PaymentMethodStrategyResolverService } from '../payment-method-strategy-resolver.service/payment-method-strategy-resolver.service';
import { PaymentMethod } from '../../entities/payment-method.entity/payment-method.entity';

@Injectable()
export class PaymentMethodProcessorService {
  constructor(
    private readonly strategyResolver: PaymentMethodStrategyResolverService,
  ) {}

  async handle(paymentMethod: PaymentMethod): Promise<void> {
    const strategy = this.strategyResolver.resolve(paymentMethod.type);
    strategy.validate(paymentMethod.details);
    await strategy.process(paymentMethod.details);
  }
}

