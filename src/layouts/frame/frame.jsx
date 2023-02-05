import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'

export default function Frame({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
