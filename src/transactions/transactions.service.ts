import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Transaction } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    return await this.prisma.$transaction(async (tx) => {
      const sender = await tx.account.findUnique({
        where: { id: dto.senderId },
      });

      if (!sender || sender.balance < dto.amount) {
        throw new BadRequestException('Saldo insuficiente ou remetente inválido');
      }

      await tx.account.update({
        where: { id: dto.senderId },
        data: { balance: { decrement: dto.amount } },
      });

      await tx.account.update({
        where: { id: dto.receiverId },
        data: { balance: { increment: dto.amount } },
      });

      const transaction = await tx.transaction.create({
        data: {
          amount: dto.amount,
          senderId: dto.senderId,
          receiverId: dto.receiverId,
        },
      });

      return transaction;
    });
  }

  // AQUI: Adicionei a tipagem explícita do retorno
  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }
}