import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bee3Labs",
  description: "Bee3 Labs is a venture studio focused on building web3 infrastructure and tooling.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/bee3labs_logo.svg',

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['meta', { name: 'title', content: 'Bee3 Labs '}],
      ['meta', { name: 'description', content: 'A venture studio focused on building web3 infrastructure and tooling.' }],
    ],
    nav: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Artefact', link: 'https://artefact.foundation/' },        
        ]
      },
      { text: 'Team', link: 'https://bee3labs.xyz/' },
    ],

    footer: {
      copyright: 'Copyright 2024 © All Rights Reserved by Bee3Labs'
    }

  }
})


