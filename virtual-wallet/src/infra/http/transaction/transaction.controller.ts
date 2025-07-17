import {
  Body,
  Controller,
  Post,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { AuthorizeTransactionDto } from './dtos/authorize-transaction.dto/authorize-transaction.dto';
import { AuthorizeTransactionHandler } from 'src/application/transaction/handlers/authorize-transaction.handler/authorize-transaction.handler';
@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly authorizeTransactionHandler: AuthorizeTransactionHandler,
  ) {}

  @Post('authorize')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Autorizar uma transação' })
  @ApiResponse({ status: 200, description: 'Transação autorizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos ou transação negada' })
  @ApiBody({ type: AuthorizeTransactionDto })
  async authorize(@Body() dto: AuthorizeTransactionDto) {
    try {
      const result = await this.authorizeTransactionHandler.execute(dto);
      return {
        message: 'Transação autorizada com sucesso',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException(
        error?.message || 'Erro ao autorizar a transação.',
      );
    }
  }
}
