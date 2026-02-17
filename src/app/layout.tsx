import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { SuspenseWrapper } from '@/components/providers/SuspenseWrapper'
import Header from '@/components/layout/Header'
import ConditionalFooter from '@/components/layout/ConditionalFooter'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Angel Wings Flight Company',
  description: 'Book flights, hotels, and cars with the best deals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LoadingSpinner />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <SuspenseWrapper>
                {children}
              </SuspenseWrapper>
            </main>
            <ConditionalFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
