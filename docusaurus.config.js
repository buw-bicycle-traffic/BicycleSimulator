// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Bicycle Simulator Standard',
  tagline: 'Bicycle Simulator Standard',
  favicon: 'img/OPENBISIM',

  // Set the production url of your site here
  url: 'https://bicyclesimulator.onrender.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BUW BT', // Usually your GitHub org/user name.
  projectName: 'Open Bicycle Simulator Standard', // Usually your repo name.
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "deployment",

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jackmad101/bicyclesimulator/tree/deployment',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jackmad101/bicyclesimulator/tree/deployment',
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
      image: 'img/OPENBISIM.png',
      navbar: {
        title: 'Open Bicycle Simulator Standard',
        logo: {
          alt: 'My Site Logo',
          src: 'img/OPENBISIM.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/buw-bicycle-traffic',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/IntroductionBISIM',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'E-Mail',
                href: 'Mailto:radverkehr@uni-wuppertal.de',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/buw-chair-of-bicycle-traffic/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/radverkehr_erfahren/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/buw-bicycle-traffic',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open Bicycle Simulator Standard Project of the Chair of Bicycle Traffic at the University of Wuppertal, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
