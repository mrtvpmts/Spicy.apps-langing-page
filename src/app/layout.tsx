import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spicy Apps | Tecnologia que Arde',
  description: 'Desenvolvemos softwares premium de alto desempenho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-brand-red selection:text-black">
        {children}
      </body>
    </html>
  )
}
