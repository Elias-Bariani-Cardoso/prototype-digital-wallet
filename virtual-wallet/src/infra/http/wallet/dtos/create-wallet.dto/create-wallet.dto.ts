import { IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum Currency {
  BRL = 'BRL',
  USD = 'USD',
}

export class CreateWalletDto {
  @ApiProperty({ example: 'dd7cb14d-12e4-4ef0-a4b9-85acb8992f92' })
  @IsUUID()
  userId: string;

  @ApiProperty({ enum: Currency })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  alias?: string;
}