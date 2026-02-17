import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Force dynamic rendering by adding a cache-control header
  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'no-store, must-revalidate')
  return response
}

export const config = {
  matcher: '/:path*',
}
