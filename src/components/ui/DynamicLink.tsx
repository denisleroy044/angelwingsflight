'use client'
import { ReactNode } from 'react'

interface DynamicLinkProps {
  href: string
  className?: string
  children: ReactNode
}

/**
 * A wrapper component for dynamic links that bypasses TypeScript's strict route checking
 * Use this component instead of Next.js Link for dynamic routes
 */
export default function DynamicLink({ href, className, children }: DynamicLinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
