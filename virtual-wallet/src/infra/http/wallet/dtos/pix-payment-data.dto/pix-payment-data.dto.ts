import { IsString, IsNotEmpty } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export class PixPaymentDataDto {
  @IsString()
  @IsNotEmpty({ message: 'Chave PIX é obrigatória' })
  pixKey: string;
}
