export default defineNuxtConfig({
    extends: ['docus'],
    modules: ['nuxt-studio'],
    css: ['~/assets/css/main.css'],
    studio: {
        repository: {
            provider: 'github',
            owner: 'feuersoftware',
            repo: 'docs',
            branch: 'main'
        },
        i18n: {
            defaultLocale: 'de'
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
})