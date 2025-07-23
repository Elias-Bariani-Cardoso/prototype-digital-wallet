import { IsString, IsNotEmpty } from 'class-validator';

export class OpenBankingPaymentDataDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome do banco é obrigatório.' })
  bankName: string;

  @IsString()
  @IsNotEmpty({ message: 'ID da autorização é obrigatório.' })
  authorizationId: string;
}
