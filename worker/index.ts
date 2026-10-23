// Cloudflare Worker: serves the static site and handles the enquiry form.
// POST /api/enquiry  ->  email to notecountingmachines@zohomail.in via Cloudflare Email Routing.
import { EmailMessage } from 'cloudflare:email';

interface Env {
  ASSETS: Fetcher;
  SEND_EMAIL: SendEmail;
}

const TO = 'notecountingmachines@zohomail.in';
const FROM = 'enquiry@notecountingmachines.com';
const ALLOWED_ORIGINS = ['https://www.notecountingmachines.com', 'https://notecountingmachines.com'];
const MACHINE_TYPES = ['Not sure yet', 'Loose note counter', 'Mix value counter', 'Bundle counter', 'Note sorter'];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
      return handleEnquiry(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleEnquiry(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  const origin = request.headers.get('Origin');
  const host = origin ? new URL(origin).hostname : '';
  const sameSite = !origin || ALLOWED_ORIGINS.includes(origin) || host.endsWith('.workers.dev') || host === 'localhost' || host === '127.0.0.1';
  if (!sameSite) return json({ error: 'Forbidden' }, 403);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(wantsJson, { error: 'Invalid form' }, 400);
  }

  // Bots fill the hidden "company" field; pretend success and drop it.
  if (clean(form.get('company'), 100)) return reply(wantsJson, { ok: true }, 200);

  const name = clean(form.get('name'), 100);
  const phone = clean(form.get('phone'), 20);
  const email = clean(form.get('email'), 120);
  const city = clean(form.get('city'), 60);
  const typeRaw = clean(form.get('type'), 40);
  const type = MACHINE_TYPES.includes(typeRaw) ? typeRaw : 'Not sure yet';
  const message = cleanMultiline(form.get('message'), 1000);

  if (!name || !/^[0-9+ ()-]{8,20}$/.test(phone)) return reply(wantsJson, { error: 'Please enter your name and a valid mobile number.' }, 400);
  const validEmail = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email) ? email : '';

  const body = [
    'New enquiry from NoteCountingMachines.com',
    '',
    `Name:    ${name}`,
    `Mobile:  ${phone}`,
    `Email:   ${validEmail || '(not given)'}`,
    `City:    ${city || '(not given)'}`,
    `Machine: ${type}`,
    '',
    'Message:',
    message || '(none)',
    '',
    `Sent: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
  ].join('\r\n');

  const raw = buildMime({
    from: `NoteCountingMachines.com <${FROM}>`,
    to: TO,
    replyTo: validEmail || undefined,
    subject: `Enquiry: ${type} – ${name}, ${city || 'city not given'}`,
    text: body,
  });

  try {
    await env.SEND_EMAIL.send(new EmailMessage(FROM, TO, raw));
  } catch (err) {
    console.error('send_email failed', err);
    return reply(wantsJson, { error: 'Could not send right now.' }, 502);
  }
  return reply(wantsJson, { ok: true }, 200);
}

function clean(v: FormDataEntryValue | null, max: number): string {
  return typeof v === 'string' ? v.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max) : '';
}

function cleanMultiline(v: FormDataEntryValue | null, max: number): string {
  return typeof v === 'string' ? v.replace(/\r\n?/g, '\n').trim().slice(0, max).replace(/\n/g, '\r\n') : '';
}

function b64(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

function buildMime(m: { from: string; to: string; replyTo?: string; subject: string; text: string }): string {
  const domain = 'notecountingmachines.com';
  const headers = [
    `From: ${m.from}`,
    `To: ${m.to}`,
    ...(m.replyTo ? [`Reply-To: ${m.replyTo}`] : []),
    `Subject: =?UTF-8?B?${b64(m.subject)}?=`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${domain}>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ];
  const encoded = b64(m.text).replace(/.{1,76}/g, '$&\r\n');
  return headers.join('\r\n') + '\r\n\r\n' + encoded;
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}

// JavaScript form submissions get JSON; plain HTML submissions get sent to a thank-you or error page.
function reply(wantsJson: boolean, data: { ok?: boolean; error?: string }, status: number): Response {
  if (wantsJson) return json(data, status);
  const to = data.ok ? '/thanks/' : '/thanks/?error=1';
  return new Response(null, { status: 303, headers: { Location: to } });
}
