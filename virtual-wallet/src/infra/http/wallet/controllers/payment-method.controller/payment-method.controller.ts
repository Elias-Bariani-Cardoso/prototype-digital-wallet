import {
  Body,
  Controller,
  Post,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

import { AddPaymentMethodDto } from '../../dtos/add-payment-method.dto/add-payment-method.dto';
import { AddPaymentMethodHandler } from 'src/application/wallet/handlers/add-payment-method.handler/add-payment-method.handler';
import { AddPaymentMethodCommand } from 'src/application/wallet/commands/add-payment-method.command/add-payment-method.command';

@ApiTags('payment-method')
@Controller('wallet/payment-method')
export class PaymentMethodController {
  constructor(
    private readonly createPaymentMethodHandler: AddPaymentMethodHandler,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Adicionar método de pagamento' })
  @ApiResponse({ status: 201, description: 'Método de pagamento adicionado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiBody({ type: AddPaymentMethodDto })
  async create(@Body() dto: AddPaymentMethodDto) {
    try {
      const command = new AddPaymentMethodCommand(dto.walletId, dto.type, dto.data);
      await this.createPaymentMethodHandler.execute(command);
      return {
        message: 'Método de pagamento adicionado com sucesso',
      };
    } catch (error) {
      throw new BadRequestException(
        'Erro ao adicionar método de pagamento. ' + (error?.message || ''),
      );
    }
  }
}
