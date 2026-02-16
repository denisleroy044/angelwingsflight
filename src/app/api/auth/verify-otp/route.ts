import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json()

    // In a real app, you would verify the OTP
    // For demo, we'll accept any 6-digit code
    if (otp && otp.length === 6) {
      return NextResponse.json(
        { message: 'OTP verified successfully' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    )
  }
}
