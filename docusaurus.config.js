// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ayudantia Esmeralda',
  tagline: 'Todo lo que necesitas saber para salvar la Compania',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://esmeralda-cbs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/guia-ayudantia/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'esmeralda-cbs', // Usually your GitHub org/user name.
  projectName: 'guia-ayudantia', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ayudantia Esmeralda',
        logo: {
          alt: 'Segunda Esmeralda',
          src: 'img/escudo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guia',
          },
          {
            href: 'https://github.com/esmeralda-cbs/guia-ayudantia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'Docs',
            // items: [
            //   {
            //     label: 'Guia',
            //     to: '/docs/intro',
            //   },
            // ],
          },
          {
            // title: 'Links de Interes',
            // items: [
            //   {
            //     label: 'Pagina principal',
            //     href: 'https://segundacbs.cl',
            //   },
            //   {
            //     label: 'Cuerpo de Bomberos de Santiago',
            //     href: 'https://cbs.cl',
            //   },
            //   {
            //     label: 'Guia de Ayudantia (8va Cia)',
            //     href: 'https://octavabomberos.cl/guia-ayudantia-documentada/',
            //   },
            // ],
          },
          {
            // title: 'More',
            // items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
            //   {
            //     label: 'GitHub',
            //     href: 'https://github.com/facebook/docusaurus',
            //   },
            // ],
          },
        ],
        copyright: `⌨️ with ❤️ by torokoko 😊 © 1863 - ${new Date().getFullYear()} Esmeralda. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
