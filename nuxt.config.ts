export default defineNuxtConfig({
    extends: ['docus'],
    modules: ['nuxt-studio'],
    css: ['~/assets/css/main.css'],
    studio: {
        route: '/admin',
        repository: {
            provider: 'github',
            owner: 'feuersoftware',
            repo: 'docs',
            branch: 'main'
        },
        i18n: {
            defaultLocale: 'de'
        }
    }
})
