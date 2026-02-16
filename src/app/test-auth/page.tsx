'use client'
import { useSession } from 'next-auth/react'

export default function TestAuthPage() {
  const { data: session, status } = useSession()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Auth Test Page</h1>
      <p>Status: <span className="font-mono">{status}</span></p>
      {session ? (
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {JSON.stringify(session, null, 2)}
        </pre>
      ) : (
        <p className="text-red-600 mt-4">Not logged in</p>
      )}
      <div className="mt-4">
        <a href="/login" className="text-blue-600 underline">Go to Login</a>
      </div>
    </div>
  )
}
