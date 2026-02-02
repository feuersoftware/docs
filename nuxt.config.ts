export default defineNuxtConfig({
  studio: {
      repository: {
          provider: 'github',
          owner: 'andreaslampe',
          repo: 'https://github.com/feuersoftware/docs',
          branch: 'main'
      }
  },

  nitro: {
      prerender: {
          // Pre-render the homepage
          routes: ['/'],
          // Then crawl all the links on the page
          crawlLinks: true
      }
  },

  modules: ['nuxt-studio']
})