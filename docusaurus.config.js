// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wacha-Doco',
  tagline: 'Dokumentacja projektu Wacha-Doco',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://jaktaktonie.github.io',
  baseUrl: '/wacha-doco/',

  // GitHub pages deployment config
  organizationName: 'Jaktaktonie', // Twoja nazwa użytkownika na GitHub
  projectName: 'wacha-doco', // Nazwa repozytorium
  deploymentBranch: 'gh-pages', // Gałąź do publikacji strony

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Dokumentacja jako strona główna
        },
        blog: false, // Wyłączamy blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'Wacha-Doco',
          logo: {
            alt: 'Wacha-Doco Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro', // Bezpośrednio odwołujemy się do ID pliku intro.md
              position: 'left',
              label: 'Dokumentacja',
            },
            {
              href: 'https://github.com/Jaktaktonie/wacha-doco',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Dokumentacja',
              items: [
                {
                  label: 'Wprowadzenie',
                  to: '/intro', // Odwołanie do dokumentu intro.md
                },
              ],
            },
            {
              title: 'Więcej',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/Jaktaktonie/wacha-doco',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Jaktaktonie. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
