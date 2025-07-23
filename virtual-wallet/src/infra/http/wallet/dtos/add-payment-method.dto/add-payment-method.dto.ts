import { IsUUID, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethodType } from 'src/core/wallet/entities/payment-method.entity/payment-method.entity';

export class AddPaymentMethodDto {
  @ApiProperty({ description: 'ID da carteira associada' })
  @IsUUID()
  walletId: string;

  @ApiProperty({ enum: PaymentMethodType })
  @IsEnum(PaymentMethodType)
  type: PaymentMethodType;

  @ApiProperty({ type: Object })
  @IsNotEmpty()
  data: Record<string, any>;
}
