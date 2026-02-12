export default defineAppConfig({
  github: {
    url: 'https://github.com/feuersoftware/docs',
    branch: 'main',
  },
  docus: {
    name: 'FeuerSoftware',
    description: 'Dokumentation für alle FeuerSoftware Produkte',
    url: 'https://docsv2.feuersoftware.com',
    locale: 'de'
  },
  header: {
    title: 'FeuerSoftware',
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
      alt: 'FeuerSoftware'
    }
  },
  ui: {
    colors: {
      primary: 'primary',
      neutral: 'slate'
    }
  }
})
