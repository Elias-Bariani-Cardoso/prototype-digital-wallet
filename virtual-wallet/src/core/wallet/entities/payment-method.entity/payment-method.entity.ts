import { v4 as uuidv4 } from 'uuid';

export enum PaymentMethodType {
  PIX = 'PIX',
  CREDIT_CARD = 'CREDIT_CARD',
  BOLETO = 'BOLETO',
  OPEN_BANKING = 'OPEN_BANKING',
}

export class PaymentMethod {
  readonly id: string;
  readonly type: PaymentMethodType;
  readonly details: Record<string, any>;

  constructor(type: PaymentMethodType, details: Record<string, any>) {
    this.id = uuidv4();
    this.type = type;
    this.details = details;
  }
}