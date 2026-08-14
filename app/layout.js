import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'G.S Nyirarukobwa — Official School Website',
  description: 'A modern, connected school experience. Explore our history, academics, staff, and apply online.',
}
// Add this import at the top
import AIAssistant from '@/components/AIAssistant'

// Add this just before the closing body tag
<AIAssistant />

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
