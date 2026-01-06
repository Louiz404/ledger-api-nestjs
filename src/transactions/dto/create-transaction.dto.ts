import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({ example: 'uuid-do-remetente' })
  senderId: string;

  @ApiProperty({ example: 'uuid-do-destinatario' })
  receiverId: string;

  @ApiProperty({ example: 1000 })
  amount: number;
}
