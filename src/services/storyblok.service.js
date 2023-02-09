import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react'

storyblokInit({
  use: [apiPlugin],
  accessToken: process.env.STORYBLOK_TOKEN,
  apiOptions: { region: 'us' },
})

const api = getStoryblokApi()

export async function getPortfolio() {
  const response = await api.get('cdn/stories', {
    starts_with: 'portfolio/',
    sort_by: 'content.createdAt:desc',
    version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
  })
  const illustrations = response.data.stories.map((story) => {
    const [width, height] = story.content.image.filename
      .split('/')[5]
      .split('x')
    return {
      uuid: story.uuid,
      name: story.name,
      slug: story.slug,
      src: story.content.image.filename,
      width,
      height,
    }
  })
  return illustrations
}
