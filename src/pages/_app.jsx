import Frame from '@/layouts/frame/frame'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}
