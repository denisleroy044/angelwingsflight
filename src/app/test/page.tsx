'use client'
import { useSession } from 'next-auth/react'

export default function TestPage() {
  const { data: session, status } = useSession()
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Session Test Page</h1>
      <p>Status: {status}</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}
