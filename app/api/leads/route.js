import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.clinic || !data.location || !data.contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const webhook = process.env.CRM_WEBHOOK_URL;
    if (webhook) {
      const upstream = await fetch(webhook, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Dentarova website', createdAt: new Date().toISOString() }),
      });
      if (!upstream.ok) return NextResponse.json({ error: 'CRM webhook failed' }, { status: 502 });
    }

    console.log('[Smile Clinic lead]', { ...data, receivedAt: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
