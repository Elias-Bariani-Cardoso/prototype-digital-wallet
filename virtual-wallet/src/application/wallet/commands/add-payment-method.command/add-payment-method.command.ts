import { PaymentMethodType } from "src/core/wallet/entities/payment-method.entity/payment-method.entity";

export class AddPaymentMethodCommand {
  constructor(
    public readonly walletId: string,
    public readonly type: PaymentMethodType,
    public readonly data: Record<string, any>,
  ) {}
}
