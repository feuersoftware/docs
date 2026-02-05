export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
    
  studio: {
      repository: {
          provider: 'github',
          owner: 'feuersoftware',
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