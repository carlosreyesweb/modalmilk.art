import '@/styles/globals.css'
import { Jua, Nunito, Open_Sans } from '@next/font/google'

const jua = Jua({ weight: '400', subsets: ['latin'] })
const nunito = Nunito({ weight: ['600', '700'], subsets: ['latin'] })
const openSans = Open_Sans({ weight: ['400', '500'], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${jua.className} ${nunito.className} ${openSans.className}`}
    >
      <Component {...pageProps} />
    </main>
  )
}
