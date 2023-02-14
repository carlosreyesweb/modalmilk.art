import { sbApi } from './storyblok.service'

export async function getCommissions() {
  const response = await sbApi.get('cdn/stories', {
    starts_with: 'pricing/',
    sort_by: 'content.price:asc',
  })
  const commissions = response.data.stories.map((story) => {
    return {
      uuid: story.uuid,
      name: story.name,
      slug: story.slug,
      tags: story.tag_list,
      price: story.content.price,
      referenceImages: story.content.referenceImages.map((img) => {
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
  })
  return commissions
}
