import './globals.css'
import type { Metadata } from 'next'
import {  Lato } from 'next/font/google'
import { SignIn } from './components/SignIn';


const lato = Lato({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Task',
  description: 'openinapp frontend task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        
        {children}</body>
    </html>
  )
}
