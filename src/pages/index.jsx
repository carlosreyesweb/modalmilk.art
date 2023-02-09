import Welcome from '@/components/welcome/welcome'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dibujos a comisión de ModalMilk</title>
        <meta
          name="description"
          content="¡Hola! Bienvenido a mi sitio web. Soy ModalMilk, una artista especializada en dibujos a comisión. Echa un vistazo a mi galería en línea para ver mis creaciones. Si quieres algo especial, ¡no dudes en encargar una obra de arte hecha a medida solo para ti!"
        />
      </Head>
      <main className={styles.main}>
        <Welcome />
      </main>
    </>
  )
}
