import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import styles from './frame.module.css'

export default function Frame({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
