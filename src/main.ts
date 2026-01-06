import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- CONFIGURAÇÃO DO SWAGGER ---
  const config = new DocumentBuilder()
    .setTitle('Ledger API')
    .setDescription('Simulação de um Banco Digital')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // O Swagger ficará disponível na rota /api
  SwaggerModule.setup('api', app, document);
  // -------------------------------

  await app.listen(3000);
}
bootstrap();
