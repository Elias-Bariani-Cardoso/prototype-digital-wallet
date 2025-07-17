import { IsUUID, IsNumber, IsPositive, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorizeTransactionDto {
  @ApiProperty({ example: 'a5b7b4b1-e2f3-4b4a-85f0-6a5d000a64b4' })
  @IsUUID()
  walletId: string;

  @ApiProperty({ example: 100.0 })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({ example: 'debit', enum: ['debit', 'credit'] })
  @IsIn(['debit', 'credit'])
  type: 'debit' | 'credit';
}
