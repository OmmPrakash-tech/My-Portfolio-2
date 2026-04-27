import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  // In production: integrate with SendGrid, Resend, or Nodemailer
  // For now, log the contact and return success
  console.log('New contact message:', { name, email, message, timestamp: new Date().toISOString() })

  // Example: send via Resend if RESEND_API_KEY is set
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>',
          to: ['ommprakashdebata6@gmail.com'],
          subject: `Portfolio Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      })
    } catch (e) {
      console.error('Email send failed:', e)
    }
  }

  return NextResponse.json({ success: true })
}
