import { PaymentMethodController } from './payment-method.controller';
import { AddPaymentMethodHandler } from 'src/application/wallet/handlers/add-payment-method.handler/add-payment-method.handler';

describe('PaymentMethodController', () => {
  it('should be defined', () => {
    const mockCreatePaymentMethodHandler = {
      execute: jest.fn(),
    } as unknown as AddPaymentMethodHandler;

    const controller = new PaymentMethodController(mockCreatePaymentMethodHandler);
    expect(controller).toBeDefined();
  });
});
