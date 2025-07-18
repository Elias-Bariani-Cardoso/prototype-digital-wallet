import {
  Body,
  Controller,
  Post,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

//create wallet imports
import { CreateWalletDto } from './dtos/create-wallet.dto/create-wallet.dto';
import { CreateWalletHandler } from 'src/application/wallet/handlers/create-wallet.handler/create-wallet.handler';

//create payment-method imports
import { CreatePaymentMethodDto } from './dtos/create-payment-method.dto/create-payment-method.dto';
import { CreatePaymentMethodHandler } from 'src/application/wallet/handlers/create-payment-method.handler/create-payment-method.handler/create-payment-method.handler';
import { CreatePaymentMethodCommand } from 'src/application/wallet/commands/create-payment-method.command/create-payment-method.command/create-payment-method.command';

@ApiTags('wallet')
@Controller('wallet')
export class WalletController {
  constructor(
    private readonly createWalletHandler: CreateWalletHandler,
    private readonly createPaymentMethodHandler: CreatePaymentMethodHandler,
  ) {}


  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar uma nova wallet' })
  @ApiResponse({ status: 201, description: 'Wallet criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiBody({ type: CreateWalletDto })
  async createWallet(@Body() dto: CreateWalletDto) {
    try {
        await this.createWalletHandler.execute(dto)
      return {
        message: 'Wallet criada com sucesso',
        data: dto,
      };
    } catch (error) {
        throw new BadRequestException(
        'Erro ao criar a wallet. ' + (error?.message || ''),
        );
    }
  }

  async createPaymentMethod(@Body() dto: CreatePaymentMethodDto) {
    const command = new CreatePaymentMethodCommand(dto.type, dto.data);
    await this.createPaymentMethodHandler.execute(command);

    return {
      message: 'Método de pagamento criado com sucesso',
    };
  }
}