import './globals.css'

export const metadata = {
  title: 'MedCare',
  description: 'Medical dashboard application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <script src="https://kit.fontawesome.com/0a722edb74.js" crossOrigin="anonymous" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}