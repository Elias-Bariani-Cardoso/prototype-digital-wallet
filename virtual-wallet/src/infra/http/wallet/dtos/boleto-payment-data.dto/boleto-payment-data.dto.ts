import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class BoletoPaymentDataDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome do pagador é obrigatório.' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'CPF é obrigatório.' })
  cpf: string;

  @IsDateString({}, { message: 'A data de vencimento deve estar no formato ISO (YYYY-MM-DD).' })
  @IsNotEmpty({ message: 'Data de vencimento é obrigatória.' })
  dataVencimento: string;

  @IsNumber({}, { message: 'Valor do boleto deve ser um número.' })
  valor: number;
}
