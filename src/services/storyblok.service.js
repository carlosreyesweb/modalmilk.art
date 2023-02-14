import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react'

storyblokInit({
  use: [apiPlugin],
  accessToken: process.env.STORYBLOK_TOKEN,
  apiOptions: { region: 'us' },
})

export const sbApi = getStoryblokApi()
