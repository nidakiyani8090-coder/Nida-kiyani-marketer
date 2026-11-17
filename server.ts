import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs/promises';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactPayload {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface StoredInquiry {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  emailDelivered: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function persistInquiry(inquiry: StoredInquiry): Promise<void> {
  const dataDir = path.resolve(__dirname, 'data');
  const filePath = path.join(dataDir, 'inquiries.json');
  await fs.mkdir(dataDir, { recursive: true });

  let existing: StoredInquiry[] = [];
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }

  existing.push(inquiry);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
}

function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL
  );
}

async function sendEmailViaSmtp(payload: Required<ContactPayload>): Promise<void> {
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: payload.email,
    subject: `[Portfolio Inquiry] ${payload.subject}`,
    text: [
      `New portfolio inquiry from ${payload.fullName} (${payload.email})`,
      '',
      `Subject: ${payload.subject}`,
      '',
      payload.message,
    ].join('\n'),
  });
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      emailDeliveryConfigured: isSmtpConfigured(),
    });
  });

  app.post('/api/contact', async (req, res) => {
    const body = (req.body || {}) as ContactPayload;
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    const fieldErrors: Record<string, string> = {};
    if (fullName.length < 2) {
      fieldErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!EMAIL_REGEX.test(email)) {
      fieldErrors.email = 'Please provide a valid email address.';
    }
    if (subject.length < 3) {
      fieldErrors.subject = 'Please enter a brief subject for your inquiry.';
    }
    if (message.length < 10) {
      fieldErrors.message = 'Please write a message of at least 10 characters.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({
        ok: false,
        status: 'validation_error',
        message: 'Please correct the highlighted fields before submitting.',
        fieldErrors,
      });
    }

    const smtpReady = isSmtpConfigured();

    if (smtpReady) {
      try {
        await sendEmailViaSmtp({ fullName, email, subject, message });
        await persistInquiry({
          id: `inq_${Date.now()}`,
          fullName,
          email,
          subject,
          message,
          submittedAt: new Date().toISOString(),
          emailDelivered: true,
        });

        return res.status(200).json({
          ok: true,
          status: 'sent',
          emailDelivered: true,
          message:
            'Thank you! Your message has been sent directly to Nida Kiyani.',
        });
      } catch (err) {
        console.error('SMTP delivery error:', err);
        return res.status(502).json({
          ok: false,
          status: 'delivery_failed',
          emailDelivered: false,
          message:
            'We could not deliver your email right now due to a mail server error. Please try again or use the direct contact details provided.',
        });
      }
    }

    // SMTP is not configured yet: honestly persist the inquiry and inform the visitor
    // without falsely claiming an email was sent.
    try {
      await persistInquiry({
        id: `inq_${Date.now()}`,
        fullName,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString(),
        emailDelivered: false,
      });

      return res.status(202).json({
        ok: true,
        status: 'recorded_no_smtp',
        emailDelivered: false,
        message:
          'Your inquiry was saved to the portfolio server, but automated email delivery is not configured yet (SMTP settings are pending). Please also connect directly via the email or WhatsApp contact details.',
      });
    } catch (err) {
      console.error('Inquiry persistence error:', err);
      return res.status(500).json({
        ok: false,
        status: 'server_error',
        emailDelivered: false,
        message:
          'Unable to submit your inquiry right now. Please reach out directly using the contact information listed.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nida Kiyani Portfolio server listening on port ${PORT}`);
  });
}

startServer();
