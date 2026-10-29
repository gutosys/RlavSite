Setup e execução do servidor de envio de e-mails (Hostinger SMTP)

1. Copie `.env.example` para `.env` e preencha as credenciais do Hostinger.

2. Instale dependências e inicie:

```powershell
cd server
npm install
npm start
```

3. Durante desenvolvimento com `npm start` do Angular, você pode rodar o servidor em paralelo.

O endpoint disponível é `POST /api/send-franchise-email` e espera um JSON com `nome`, `email`, `telefone`, `cidade`, `capital`.
