import Illustrations from '@/components/illustrations/illustrations'
import Main from '@/components/main/main'
import { getProject, getProjectSlugs } from '@/services/portfolio.service'
import Head from 'next/head'

export default function Project({ data }) {
  return (
    <>
      <Head>
        <title>{`${data.name} - ModalMilk`}</title>
        <meta name="description" content={data.name} />
      </Head>
      <Main>
        <Illustrations data={data} />
      </Main>
    </>
  )
}

export async function getStaticPaths() {
  const slugs = await getProjectSlugs()
  const paths = slugs.map((slug) => ({ params: { project: slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getProject(params.project)
  return { props: { data }, revalidate: 60 }
}
