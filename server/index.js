const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/api/send-franchise-email', async (req, res) => {
  const { nome, email, telefone, cidade, capital } = req.body || {};
  if (!nome || !email || !telefone) return res.status(400).json({ error: 'Missing required fields' });

  const subject = 'Interessado na franquia via rlav.com.br';
  const text = `Nome: ${nome}\nE-mail: ${email}\nWhatsApp/Telefone: ${telefone}\nCidade/Estado: ${cidade}\nCapital Disponível: ${capital}`;

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || 'rlav@rlav.com.br',
      subject,
      text
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Email sender running on ${port}`));
