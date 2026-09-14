export default defineNuxtConfig({
    extends: ['docus'],
    modules: ['nuxt-studio'],
    css: ['~/assets/css/main.css'],
    // Prerendering ist unter Node 24.x (siehe Dockerfile: node:24-alpine) defekt: Der
    // Prerender-Vorgang bricht am Ende ausnahmslos lautlos ab (kein Fehler, kein
    // Stacktrace, kein "Build complete!") - unabhängig davon, welche Routen betroffen
    // sind. Dadurch fehlte .output/server im fertigen Docker-Image ("Cannot find
    // module '/app/.output/server/index.mjs'"). Reproduziert lokal mit Node 24.20.0
    // UND 24.21.0, tritt unter Node 25 nicht auf. Die App läuft als SSR-Server, Seiten
    // (inkl. OG-Bilder) werden also auch ohne Prerendering zur Laufzeit korrekt
    // ausgeliefert - nur eben nicht vorab statisch gecacht.
    nitro: {
        prerender: {
            crawlLinks: false,
        },
    },
    hooks: {
        'nitro:config'(nitroConfig) {
            // docus, @nuxt/content und das llms-Modul registrieren über denselben Hook
            // eigene Prerender-Routen (/, /sitemap.xml, /__nuxt_content/*/sql_dump.txt,
            // /raw/*.md, ...). crawlLinks:false allein verhindert das nicht - deshalb hier
            // zusätzlich vollständig leeren, damit der Prerenderer gar nicht erst anläuft.
            nitroConfig.prerender = nitroConfig.prerender || {}
            nitroConfig.prerender.routes = []
        },
    },
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
    },
    llms: {
        domain: 'https://docsv2.feuersoftware.com',
        title: 'Feuersoftware Dokumentation',
        description: 'Dokumentation für alle Feuersoftware Produkte - EinsatzMonitor, Connect, EinsatzManager, EinsatzApp, PartnerApp, EinsatzTablet, HelferApp und Tools.',
        sections: [
            {
                title: 'EinsatzMonitor',
                description: 'Das zentrale Anzeigesystem für Einsatzinformationen.',
                links: [
                    { title: 'EinsatzMonitor', href: '/einsatzmonitor' }
                ]
            },
            {
                title: 'Connect',
                description: 'Verbindung und Kommunikation zwischen den verschiedenen Systemen.',
                links: [
                    { title: 'Connect', href: '/connect' },
                    { title: 'Kalenderimport CSV', href: '/connect/kalenderimport_csv' }
                ]
            },
            {
                title: 'EinsatzManager',
                description: 'Das zentrale Verwaltungstool für Einsätze.',
                links: [
                    { title: 'EinsatzManager', href: '/einsatzmanager' }
                ]
            },
            {
                title: 'EinsatzApp',
                description: 'Die mobile Anwendung für Einsatzkräfte.',
                links: [
                    { title: 'EinsatzApp', href: '/einsatzapp' }
                ]
            },
            {
                title: 'PartnerApp',
                description: 'Informiert deinen Partner wenn du zum Einsatz fährst.',
                links: [
                    { title: 'PartnerApp', href: '/partnerapp' }
                ]
            },
            {
                title: 'EinsatzTablet',
                description: 'Die Tablet-optimierte Anwendung für den Einsatz vor Ort.',
                links: [
                    { title: 'EinsatzTablet', href: '/einsatztablet' }
                ]
            },
            {
                title: 'HelferApp',
                description: 'Die mobile Anwendung für Sanitäts- und Brandsicherheitsdienste.',
                links: [
                    { title: 'HelferApp', href: '/helferapp' }
                ]
            },
            {
                title: 'Tools',
                description: 'Weitere Hilfswerkzeuge und Utilities zur Integration.',
                links: [
                    { title: 'Tools', href: '/tools' },
                    { title: 'MailAgent', href: '/tools/mailagent' }
                ]
            }
        ]
    }
})
