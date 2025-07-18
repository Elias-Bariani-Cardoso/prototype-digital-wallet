import { PaymentMethod } from '../payment-method.entity/payment-method.entity';
import { Balance } from '../../value-objects/balance.vo/balance.vo';
import { WalletCreatedEvent } from '../../events/wallet-created.event/wallet-created.event';

export class Wallet {
  readonly id: string;
  readonly userId: string;
  private balance: Balance;
  private paymentMethods: PaymentMethod[];

  constructor(userId: string) {
    this.id = crypto.randomUUID(); // ou usar uuidv4
    this.userId = userId;
    this.balance = new Balance(0);
    this.paymentMethods = [];

    this.apply(new WalletCreatedEvent(this.id, this.userId));
  }

  getBalance(): number {
    return this.balance.value;
  }

  addPaymentMethod(method: PaymentMethod) {
    this.paymentMethods.push(method);
  }

  getPaymentMethods(): PaymentMethod[] {
    return this.paymentMethods;
  }

  private apply(event: WalletCreatedEvent) {
    console.log('Domain event:', event);
  }
}