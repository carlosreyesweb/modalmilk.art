import Main from '@/components/main/main'
import Portfolio from '@/components/portfolio/portfolio'
import Welcome from '@/components/welcome/welcome'
import { getProjects } from '@/services/portfolio.service'
import Head from 'next/head'

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Dibujos a comisión de ModalMilk</title>
        <meta
          name="description"
          content="¡Hola! Bienvenido a mi sitio web. Soy ModalMilk, una artista especializada en dibujos a comisión. Echa un vistazo a mi galería en línea para ver mis creaciones. Si quieres algo especial, ¡no dudes en encargar una obra de arte hecha a medida solo para ti!"
        />
      </Head>
      <Main>
        <Welcome />
        <Portfolio projects={projects} />
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()
  return { props: { projects }, revalidate: 60 }
}
