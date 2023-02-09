import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react'

storyblokInit({
  use: [apiPlugin],
  accessToken: process.env.STORYBLOK_TOKEN,
  apiOptions: { region: 'us' },
})

const api = getStoryblokApi()

export async function getProjects() {
  const response = await api.get('cdn/stories', {
    starts_with: 'portfolio/',
    sort_by: 'content.createdAt:desc',
  })
  const projects = response.data.stories.map((story) => {
    const [coverWidth, coverHeight] = story.content.cover.filename
      .split('/')[5]
      .split('x')
    return {
      uuid: story.uuid,
      name: story.name,
      slug: story.slug,
      tags: story.tag_list,
      cover: {
        id: story.content.cover.id,
        src: story.content.cover.filename,
        width: coverWidth,
        height: coverHeight,
        alt: story.content.cover.alt,
      },
    }
  })
  return projects
}

export async function getProjectSlugs() {
  const response = await api.get('cdn/links', {
    starts_with: 'portfolio/',
  })
  const slugs = Object.values(response.data.links).map((link) =>
    link.slug.split('/').pop()
  )
  return slugs
}

export async function getProject(slug) {
  const {
    data: { story },
  } = await api.get(`cdn/stories/portfolio/${slug}`)
  const project = {
    uuid: story.uuid,
    name: story.name,
    slug: story.slug,
    tags: story.tag_list,
    images: story.content.images.map((img) => {
      const [width, height] = img.filename.split('/')[5].split('x')
      return {
        id: img.id,
        src: img.filename,
        alt: img.alt,
        width,
        height,
      }
    }),
  }
  return project
}
