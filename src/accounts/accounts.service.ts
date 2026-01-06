import { Injectable } from "@nestjs/common";
import { CreateAccountDto } from "./dto/create-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    return await this.prisma.account.create({
      data: {
        ownerName: createAccountDto.ownerName,
        balance: createAccountDto.initialBalance || 0,
      },
    });
  }

  findAll() {
    return this.prisma.account.findMany();
  }

  findOne(id: string) {
    return this.prisma.account.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return 'This action updates a #' + id + ' account';
  }

  remove(id: string) {
    return 'This action removes a #' + id + ' account';
  }
}
