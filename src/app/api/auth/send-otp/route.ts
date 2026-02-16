import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // In a real app, you would send an actual OTP via email/SMS
    // For demo, we'll just simulate success
    console.log(`OTP sent to ${email}`)

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    )
  }
}
