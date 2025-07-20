import { Injectable } from '@nestjs/common';
import { PaymentMethodType } from '../../entities/payment-method.entity/payment-method.entity';
import { PaymentMethodStrategyResolverService } from '../payment-method-strategy-resolver.service/payment-method-strategy-resolver.service';

@Injectable()
export class PaymentMethodProcessorService {
  constructor(
    private readonly strategyResolver: PaymentMethodStrategyResolverService,
  ) {}

  async handle(type: PaymentMethodType, data: any): Promise<void> {
    const strategy = this.strategyResolver.resolve(type);
    strategy.validate(data);
    await strategy.process(data);
  }
}

