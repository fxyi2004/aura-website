import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, company, country, email, phone, scenarios, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: '缺少必填字段' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'AURA Website <noreply@aura-is.com>',
    to: 'info@aura-is.com',
    subject: `New Inquiry from ${name}${country ? ` (${country})` : ''}`,
    html: `
      <h2>New Inquiry from AURA Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Country:</strong> ${country || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Interested Scenarios:</strong> ${scenarios || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: '发送失败' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
