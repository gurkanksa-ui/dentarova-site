# Dentarova — Dental Growth Partner

Next.js website for Dentarova, focused on helping dental clinics acquire and convert more patients.

## Run locally
1. Install Node.js LTS.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev`.
5. Open http://localhost:3000/en

## Languages
- /en English
- /tr Turkish
- /ar Arabic (RTL)

## Contact
- WhatsApp: configured via NEXT_PUBLIC_WHATSAPP_NUMBER
- Email: dentarova@gmail.com
- Instagram: https://www.instagram.com/dentarova/

## Lead form
The form posts to `/api/leads`. Set `CRM_WEBHOOK_URL` to send each lead to your CRM/automation platform.

## Production
Set `NEXT_PUBLIC_SITE_URL` to your real domain before deployment. s
