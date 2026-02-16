import { NextResponse } from 'next/server'

// Simple in-memory storage for demo (replace with database in production)
const users: any[] = []

export async function POST(req: Request) {
  try {
    const { name, email, password, phone, country } = await req.json()

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user already exists (in-memory for demo)
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // Simple password hash (in production use bcrypt)
    const hashedPassword = password // Simplified for demo

    // Create user (store in memory for demo)
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      phone: phone || '',
      country: country || '',
      role: 'USER',
      createdAt: new Date().toISOString()
    }
    
    users.push(newUser)

    console.log('User registered:', { email, name })

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: { 
          id: newUser.id, 
          email: newUser.email, 
          name: newUser.name 
        } 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
