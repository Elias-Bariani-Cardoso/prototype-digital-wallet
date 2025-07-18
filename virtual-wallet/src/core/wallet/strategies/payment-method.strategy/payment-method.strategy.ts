export interface PaymentMethodStrategy {
  validate(data: any): void;
  process(data: any): Promise<void>;
}