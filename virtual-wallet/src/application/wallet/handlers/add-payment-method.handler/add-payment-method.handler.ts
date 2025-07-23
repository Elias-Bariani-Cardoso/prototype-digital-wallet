import { Injectable } from '@nestjs/common';
import { AddPaymentMethodCommand } from 'src/application/wallet/commands/add-payment-method.command/add-payment-method.command';
import { PaymentMethodProcessorService } from 'src/core/wallet/services/payment-method-processor.service/payment-method-processor.service';
import { WalletRepository } from 'src/core/wallet/repositories/wallet.repository/wallet.repository';
import { PaymentMethod } from 'src/core/wallet/entities/payment-method.entity/payment-method.entity';
import { Wallet } from 'src/core/wallet/entities/wallet.entity/wallet.entity';

@Injectable()
export class AddPaymentMethodHandler {
  constructor(
    private readonly processor: PaymentMethodProcessorService,
    private readonly walletRepository: WalletRepository,
  ) {}

  async execute(command: AddPaymentMethodCommand): Promise<void> {

    const wallet: Wallet | null = await this.walletRepository.findById(command.walletId);
    if (!wallet) {
      throw new Error('Wallet não encontrada');
    }

    const paymentMethod = new PaymentMethod(command.type, command.data);
    wallet.addPaymentMethod(paymentMethod);
    await this.processor.handle(paymentMethod);
    await this.walletRepository.save(wallet);
  }
}
