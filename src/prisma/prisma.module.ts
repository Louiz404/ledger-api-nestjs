import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <--- O Segredo: Torna este módulo visível para a aplicação inteira
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <--- Diz: "Quem importar este módulo, ganha o PrismaService de brinde"
})
export class PrismaModule {}
