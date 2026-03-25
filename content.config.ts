import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        image: z.string().optional(),
        minRead: z.number().optional(),
        author: z.object({
          name: z.string(),
          description: z.string().optional(),
          avatar: z.object({
            src: z.string(),
            alt: z.string()
          }).optional()
        }).optional()
      })
    })
  }
})
