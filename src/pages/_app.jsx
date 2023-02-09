import Frame from '@/layouts/frame/frame'
import '@/styles/globals.css'
import { Router } from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeComplete', nProgress.done)
Router.events.on('routeChangeError', nProgress.done)

export default function App({ Component, pageProps }) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}
