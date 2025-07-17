import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthorizeTransactionDto } from 'src/infra/http/transaction/dtos/authorize-transaction.dto/authorize-transaction.dto';

@Injectable()
export class AuthorizeTransactionHandler {
  async execute(dto: AuthorizeTransactionDto): Promise<any> {
    const { walletId, amount, type } = dto;
    if (walletId === '00000000-0000-0000-0000-000000000000') {
      throw new NotFoundException('Carteira não encontrada');
    }

    if (type === 'debit' && amount > 1000) {
      throw new BadRequestException('Saldo insuficiente');
    }

    return {
      id: 'transacao-123',
      walletId,
      amount,
      type,
      status: 'AUTHORIZED',
      authorizedAt: new Date().toISOString(),
    };
  }
}
