import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from 'src/infra/http/wallet/dtos/create-wallet.dto/create-wallet.dto';

@Injectable()
export class CreateWalletHandler {
  async execute(dto: CreateWalletDto): Promise<void> {
    if (!dto.userId) {
      throw new Error('Dados faltando: userId');
    }

    console.log('Wallet criada para usuário:', dto.userId);
  }
}
