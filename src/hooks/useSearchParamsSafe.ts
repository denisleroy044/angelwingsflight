'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useSearchParamsSafe() {
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return new URLSearchParams()
  }

  return searchParams
}
