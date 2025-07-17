import {
  Body,
  Controller,
  Post,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateWalletDto } from './dtos/create-wallet.dto/create-wallet.dto';
import { CreateWalletHandler } from 'src/application/wallet/handlers/create-wallet.handler/create-wallet.handler';

@ApiTags('wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly createWalletHandler: CreateWalletHandler) {}


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
        'Erro ao criar a wallet. ' + error?.message || 'Erro ao criar a wallet.',
        );
    }
  }
}