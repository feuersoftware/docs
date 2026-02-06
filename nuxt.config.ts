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
