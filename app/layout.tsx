import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"]});

export const metadata = {
  title: 'Kinal EmpathyLink',
  description: 'Denuncias de violencia escolar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
