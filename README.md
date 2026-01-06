# 🏦 Ledger API - Sistema de Banco Digital

API RESTful desenvolvida para simulação de operações bancárias, garantindo atomicidade em transações financeiras e integridade de dados.

## 🚀 Tecnologias Utilizadas

* **NestJS** (Framework Node.js)
* **TypeScript** (Linguagem)
* **Prisma ORM** (Gerenciamento de Banco de Dados)
* **PostgreSQL** (Banco de Dados Relacional)
* **Docker** (Containerização do Banco)
* **Swagger** (Documentação da API)

## ✨ Funcionalidades

* ✅ **Criação de Contas:** Registro de correntistas com saldo inicial.
* ✅ **Transações Atômicas:** Transferências financeiras seguras (ACID) usando `Prisma Interactive Transactions`.
* ✅ **Histórico:** Registro automático de todas as movimentações (Extrato).
* ✅ **Documentação:** Interface Swagger interativa para testes.

## 🛠️ Como Rodar

### Pré-requisitos
* Node.js (LTS)
* Docker Desktop

### Passo a Passo

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/ledger-api-nestjs.git](https://github.com/seu-usuario/ledger-api-nestjs.git)
    cd ledger-api-nestjs
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Suba o Banco de Dados (Docker)**
    ```bash
    docker-compose up -d
    ```

4.  **Configure o Banco**
    Crie um arquivo `.env` na raiz baseado no exemplo e rode:
    ```bash
    npx prisma migrate dev
    ```

5.  **Rode a API**
    ```bash
    npm run start:dev
    ```

6.  **Acesse a Documentação**
    Abra `http://localhost:3000/api` no navegador.
