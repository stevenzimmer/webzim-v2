
import NavBar from '@/components/carhub/NavBar'
import './styles.css'
import Footer from '@/components/carhub/Footer'
import { N } from 'drizzle-orm/column.d-b7dc3bdb'

export const metadata = {
  title: 'Carhub | WebZim',
  description: 'Discover best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <>
      <NavBar />
      {children}
      <Footer />
      </>
  )
}
