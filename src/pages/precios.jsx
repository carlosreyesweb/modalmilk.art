import Contact from '@/components/contact/contact'
import Main from '@/components/main/main'
import Pricing from '@/components/pricing/pricing'
import { getCommissions } from '@/services/pricing.service'
import Head from 'next/head'

export default function Precios({ commissions }) {
  return (
    <>
      <Head>
        <title>Precios - ModalMilk</title>
        <meta name="description" content="" />
      </Head>
      <Main>
        <Pricing commissions={commissions} />
        <Contact />
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const commissions = await getCommissions()
  return { props: { commissions }, revalidate: 60 }
}
