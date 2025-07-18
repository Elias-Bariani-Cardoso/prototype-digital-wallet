import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @IsUUID()
  @ApiProperty({ description: 'ID do usuário que será dono da carteira' })
  userId: string;
}