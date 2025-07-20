import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreditCardPaymentDataDto {
  @IsString()
  @IsNotEmpty({ message: 'Número do cartão é obrigatório.' })
  @Length(13, 19, { message: 'Número do cartão deve ter entre 13 e 19 dígitos.' })
  cardNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'CVV é obrigatório.' })
  @Length(3, 4, { message: 'CVV deve ter 3 ou 4 dígitos.' })
  cvv: string;

  @IsString()
  @IsNotEmpty({ message: 'Data de expiração é obrigatória.' })
  @Matches(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'Data de expiração deve estar no formato MM/AA.',
  })
  expirationDate: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do titular é obrigatório.' })
  cardHolderName: string;
}
