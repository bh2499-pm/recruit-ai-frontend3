import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Recruit-AI',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
