import './globals.css'
import { Manrope } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: `Abhinav's App`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className='container'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
