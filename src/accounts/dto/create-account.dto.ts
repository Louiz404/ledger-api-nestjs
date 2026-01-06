import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
  @ApiProperty({ example: 'Luiz Canziani' }) // <--- Decore os campos
  ownerName: string;

  @ApiProperty({ example: 5000, required: false })
  initialBalance?: number;
}
