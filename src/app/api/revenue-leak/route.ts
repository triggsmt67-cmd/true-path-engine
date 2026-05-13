import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'stub_key');
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) rateLimitMap.delete(key);
  }
}, 60000);

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + 60000 };
    
    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + 60000;
    }
    rateData.count++;
    rateLimitMap.set(ip, rateData);

    if (rateData.count > 5) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { email, industry, jobValue, missedCalls, closeRate, weeklyLeak, annualLeak, ltvMultiplier } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format provided.' }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const subject = `Your Revenue Leak Diagnostic Report`;

      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Revenue Leak Diagnostic Report</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 800px; margin: 40px auto; padding: 0 20px; background-color: #f9fafb; }
    .header { border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
    .header h1 { color: #0a0a0c; font-size: 28px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; }
    .section { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .section-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; margin-bottom: 16px; }
    .section-title { font-size: 18px; font-weight: 700; margin: 0; color: #374151; }
    .metric { margin-bottom: 8px; font-size: 15px; }
    .metric strong { color: #4b5563; }
    .conclusion { background-color: #0a0a0c; color: white; padding: 30px; border-radius: 8px; text-align: center; margin-top: 40px; }
    .conclusion h2 { margin: 0 0 15px 0; color: #4ade80; }
    .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #9ca3af; }
    .footer a { color: #4ade80; text-decoration: none; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Revenue Leak Diagnostic Report</h1>
    <div style="font-size: 14px; color: #6b7280; margin-bottom: 5px;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
    <div style="font-size: 14px; color: #6b7280;"><strong>Requested By:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">1. The Raw Data</h2>
    </div>
    <div class="metric"><strong>Average Job Value:</strong> $${Number(jobValue).toLocaleString()}</div>
    <div class="metric"><strong>Missed Calls Per Week:</strong> ${Number(missedCalls)}</div>
    <div class="metric"><strong>Normal Close Rate:</strong> ${Number(closeRate)}%</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">2. Your Leak Breakdown</h2>
    </div>
    <div class="metric"><strong>Lost Jobs Per Week:</strong> ${(Number(missedCalls) * (Number(closeRate) / 100)).toFixed(1)}</div>
    <div class="metric"><strong>Weekly Revenue Leak:</strong> $${Number(weeklyLeak).toLocaleString()}</div>
    <div class="metric"><strong>Annual Revenue Leak:</strong> <span style="color: #ef4444; font-weight: 600;">$${Number(annualLeak).toLocaleString()}</span></div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">3. The Lifetime Value Multiplier</h2>
    </div>
    <div class="metric"><strong>Industry LTV Multiplier:</strong> ${Number(ltvMultiplier)}x</div>
    <div class="metric"><strong>True Compound Leak:</strong> <span style="color: #ef4444; font-weight: 600;">$${(Number(annualLeak) * Number(ltvMultiplier)).toLocaleString()}</span></div>
    <div style="font-size: 13px; color: #6b7280; margin-top: 8px;">*You aren't just losing the first job. You are losing recurring revenue and referrals over the lifetime of those lost customers.</div>
  </div>
  <div class="section">
    <div class="section-header">
      <h2 class="section-title">4. Methodology & Data Sourcing</h2>
    </div>
    <div style="font-size: 14px; margin-bottom: 12px; color: #4b5563;">We do not use inflated marketing metrics. This diagnostic uses a strict, linear formula based entirely on the baseline metrics of the <strong>${industry}</strong> sector.</div>
    <div class="metric" style="font-family: monospace; font-size: 13px; background: #f3f4f6; padding: 8px; border-radius: 4px; margin-bottom: 8px; color: #111827;">(Missed Calls) &times; (Close Rate) = Lost Jobs</div>
    <div class="metric" style="font-family: monospace; font-size: 13px; background: #f3f4f6; padding: 8px; border-radius: 4px; color: #111827;">(Lost Jobs) &times; (Avg Job Value) = Top-Line Revenue Leak</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">5. How Competitors Are Stealing Your Leads</h2>
    </div>
    <p style="font-size: 14px; color: #4b5563; margin: 0;">
      When a homeowner has an emergency, they search Google and call the first business they see. If you don't answer, <strong>85% of callers will immediately hang up and dial the next competitor on the list.</strong> They will not leave a voicemail. They will not wait. By missing the call, you are literally paying for marketing that feeds your direct competitors.
    </p>
  </div>

  <div class="conclusion" style="background-color: #0a0a0c; color: white; padding: 30px; border-radius: 8px; border-left: 4px solid #4ade80; text-align: left;">
    <h2 style="margin: 0 0 15px 0; color: #4ade80; font-size: 20px;">The 5-Minute Fix & Exact Script</h2>
    <p style="font-size: 15px; margin: 0 0 15px 0;">
      You can stop this bleeding today by implementing an automated <strong>Missed-Call Text-Back System</strong>. When you miss a call, the system instantly fires this exact text message to the caller within 3 seconds:
    </p>
    <div style="background-color: #1f2937; padding: 16px; border-radius: 6px; font-style: italic; font-size: 16px; margin-bottom: 15px;">
      "Hey, this is [Your Name] from [Your Business]. We're tied up on a job right now, but how can we help you today?"
    </div>
    <p style="font-size: 14px; margin: 0; color: #9ca3af;">
      This simple, automated text interrupts their search, makes them feel acknowledged, and stops them from calling your competitor.
    </p>
  </div>

  <div class="footer">
    Report generated by <strong>True Path Digital</strong><br>
    <a href="https://truepath406.com">truepath406.com</a>
  </div>
</body>
</html>
      `;

      const notificationEmail = (process.env.NOTIFICATION_EMAIL || 'trevor@truepath406.com').trim();
      const senderEmail = (process.env.SENDER_EMAIL || 'notifications@truepath406.com').trim();

      const data = await resend.emails.send({
        from: senderEmail,
        to: [email],
        bcc: [notificationEmail],
        subject: subject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, data });
    } else {
      console.log('TEST MODE (No API Key): Email would be sent to', email);
      return NextResponse.json({ success: true, mocked: true });
    }
  } catch (error) {
    console.error('Error sending revenue leak email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
