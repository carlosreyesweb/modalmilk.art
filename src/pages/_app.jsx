import '@/styles/globals.css'
import Frame from '@/templates/frame/frame'

export default function App({ Component, pageProps }) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}
