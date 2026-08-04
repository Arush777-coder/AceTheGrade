import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory store for received order receipts
interface OrderReceipt {
  id: string;
  timestamp: string;
  studentName: string;
  parentPhone: string;
  email: string;
  selectedClass: string;
  selectedSubjectBookName: string;
  selectedKits: string[];
  upiName: string;
  utr: string;
  bookingCode: string;
  totalCost: number;
  receiptFileBase64?: string;
  receiptFileName?: string;
}

const receivedReceipts: OrderReceipt[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 payment receipt screenshots
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', receiptsCount: receivedReceipts.length });
  });

  // GET endpoint to view received receipts
  app.get('/api/receipts', (_req, res) => {
    res.json({ success: true, count: receivedReceipts.length, receipts: receivedReceipts });
  });

  // POST endpoint to handle order receipt submission and email delivery
  app.post('/api/send-receipt', async (req, res) => {
    try {
      const {
        studentName,
        parentPhone,
        email,
        selectedClass,
        selectedSubjectBookName,
        selectedKits,
        upiName,
        utr,
        bookingCode,
        totalCost,
        receiptFileBase64,
        receiptFileName
      } = req.body;

      const ownerEmail = 'acethegrade77@gmail.com';
      const orderId = bookingCode || `ATG-${Date.now()}`;
      const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      const newReceipt: OrderReceipt = {
        id: orderId,
        timestamp: now,
        studentName: studentName || 'N/A',
        parentPhone: parentPhone || 'N/A',
        email: email || 'N/A',
        selectedClass: selectedClass || '9th',
        selectedSubjectBookName: selectedSubjectBookName || 'N/A',
        selectedKits: selectedKits || [],
        upiName: upiName || 'N/A',
        utr: utr || 'N/A',
        bookingCode: orderId,
        totalCost: totalCost || 0,
        receiptFileBase64,
        receiptFileName: receiptFileName || 'receipt_screenshot.png'
      };

      receivedReceipts.unshift(newReceipt);

      // Construct html email body for the owner
      const kitsList = Array.isArray(selectedKits) ? selectedKits.join(', ') : selectedKits;
      
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-radius: 12px; background-color: #f8fafc;">
          <div style="background-color: #1e1b4b; color: white; padding: 16px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">🚨 NEW PAYMENT RECEIPT SUBMITTED</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">AceTheGrade Order Notification</p>
          </div>
          
          <div style="padding: 20px; background-color: white;">
            <p style="font-size: 14px; color: #334155;"><strong>Owner Notification:</strong> Customer has submitted payment proof for order <strong>${orderId}</strong>.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Student Name:</td>
                <td style="padding: 8px; color: #0f172a; font-weight: bold;">${newReceipt.studentName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Class & Textbook:</td>
                <td style="padding: 8px; color: #0f172a;">Class ${newReceipt.selectedClass} - ${newReceipt.selectedSubjectBookName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Phone / WhatsApp:</td>
                <td style="padding: 8px; color: #0f172a;"><a href="https://wa.me/91${newReceipt.parentPhone}?text=Hello%20${encodeURIComponent(newReceipt.studentName)},%20here%20is%20your%20AceTheGrade%20study%20kit." target="_blank">+91 ${newReceipt.parentPhone} (Click to WhatsApp)</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Student Email:</td>
                <td style="padding: 8px; color: #0f172a;">${newReceipt.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Selected Kits:</td>
                <td style="padding: 8px; color: #0f172a;">${kitsList}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Amount Paid:</td>
                <td style="padding: 8px; color: #2563eb; font-weight: bold; font-size: 15px;">₹${newReceipt.totalCost}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">UPI Payer Name:</td>
                <td style="padding: 8px; color: #4338ca; font-weight: bold;">${newReceipt.upiName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">12-digit UTR Number:</td>
                <td style="padding: 8px; color: #047857; font-weight: bold; font-family: monospace; font-size: 14px;">${newReceipt.utr}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Booking / Access Key:</td>
                <td style="padding: 8px; color: #1e40af; font-weight: bold; font-family: monospace;">${newReceipt.bookingCode}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #64748b; font-weight: bold;">Timestamp:</td>
                <td style="padding: 8px; color: #64748b;">${now}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 12px; background-color: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #1e40af;">📎 Payment Receipt Screenshot Attached Below</h4>
              <p style="margin: 0; font-size: 11px; color: #3b82f6;">Please check the receipt image attached with this notification or view directly below.</p>
            </div>
          </div>
        </div>
      `;

      // Try sending email via Nodemailer if SMTP configured, or generate email payload
      let emailSent = false;
      const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST;
      const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER;
      const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS;

      if (smtpHost && smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });

          const attachments = [];
          if (receiptFileBase64) {
            const base64Data = receiptFileBase64.replace(/^data:image\/\w+;base64,/, '');
            attachments.push({
              filename: receiptFileName || 'payment_receipt.png',
              content: Buffer.from(base64Data, 'base64')
            });
          }

          await transporter.sendMail({
            from: `"AceTheGrade Orders" <${smtpUser}>`,
            to: ownerEmail,
            subject: `[AceTheGrade Order] Payment Receipt from ${studentName} (${newReceipt.bookingCode})`,
            html: htmlBody,
            attachments
          });
          emailSent = true;
          console.log(`Email successfully dispatched via Nodemailer to ${ownerEmail}`);
        } catch (mailErr) {
          console.error('Nodemailer send error:', mailErr);
        }
      }

      console.log(`Receipt logged for owner (${ownerEmail}). Order ID: ${orderId}, UTR: ${newReceipt.utr}`);

      return res.json({
        success: true,
        message: `Payment receipt successfully recorded and queued for delivery to ${ownerEmail}`,
        emailSent,
        ownerEmail,
        orderId: newReceipt.id,
        receipt: newReceipt
      });
    } catch (error) {
      console.error('Error in /api/send-receipt:', error);
      return res.status(500).json({ success: false, error: 'Failed to process receipt submission' });
    }
  });

  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AceTheGrade Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
