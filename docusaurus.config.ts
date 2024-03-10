import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fhenix',
  tagline: 'Programmable. Scalable. Encrypted.',
  favicon: 'img/Favicon_Dark.svg',

  // Set the production url of your site here
  url: 'https://docs.fhenix.zone',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fhenixprotocol', // Usually your GitHub org/user name.
  projectName: 'fhenix-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fhenixprotocol/fhenix-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Splash.webp',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Fhenix',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fhenixprotocol/',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://discord.gg/FuVgxrvJMY',
          className: 'header-discord-link',
          position: 'right',
        },
        {
          href: 'https://twitter.com/FhenixIO',
          className: 'header-twitter-link',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Dev Docs',
              to: '/docs/devdocs/intro',
            },
            {
              label: 'Introduction',
              to: '/docs/devdocs/intro',
            },
            {
              label: 'Get Started',
              to: '/docs/devdocs/Setting%20Up%20Your%20Environment/intro',
            },
            {
              label: 'Tutorial',
              to: '/docs/tutorial/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@Fhenix',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/FuVgxrvJMY',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/FhenixIO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fhenixprotocol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fhe Labs.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'EMZX0TM6JC',

      // Public API key: it is safe to commit it
      apiKey: '351b32638e73f99bfc099624f971de54',
      
      indexName: 'fhenix',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      //searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
