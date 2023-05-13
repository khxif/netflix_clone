import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Netflix Clone',
  description: 'Get the latest movies',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" >
      <link rel="icon" href="/Logo.png" />
      <body className='bg-black text-white scrollbar-hide'>
        <Header />
        {children}
      </body>
    </html>
  )
}
