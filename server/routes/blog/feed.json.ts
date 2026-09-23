import { queryCollection } from '@nuxt/content/server'

/**
 * Machine-readable list of blog posts, newest first - for other FeuerSoftware apps that show blog
 * teasers (e.g. the Connect Portal's landing page). Prerendered like the rest of the site, so it is a
 * static file that updates with every deployment. Paths (post and image) are relative to this site.
 */
export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .order('date', 'DESC')
    .select('title', 'description', 'path', 'date', 'image', 'minRead')
    .all()

  return {
    posts: posts.map(post => ({
      title: post.title,
      description: post.description,
      path: post.path,
      date: post.date,
      image: post.image ?? null,
      minRead: post.minRead ?? null
    }))
  }
})
