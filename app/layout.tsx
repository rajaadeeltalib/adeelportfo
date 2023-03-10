import './globals.css'
// import "~slick-carousel/slick/slick.css"; 

export const metadata = {
  title: 'Portfolio',
  description: 'Adeel Talib Portfolio',
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
