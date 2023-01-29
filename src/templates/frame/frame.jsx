import Footer from '@/organisms/footer/footer'
import Navbar from '@/organisms/navbar/navbar'

export default function Frame({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
