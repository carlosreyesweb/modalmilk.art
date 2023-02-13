import Illustrations from '@/components/illustrations/illustrations'
import { getProject, getProjectSlugs } from '@/services/storyblok.service'
import Head from 'next/head'
import styles from '../styles/Project.module.css'

export default function Project({ data }) {
  return (
    <>
      <Head>
        <title>{`${data.name} - ModalMilk`}</title>
        <meta name="description" content={data.name} />
      </Head>
      <main className={styles.main}>
        <Illustrations data={data} />
      </main>
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
