module.exports = {
  title: 'Wiki développement web',
  tagline: 'HTML - CSS - JavaScript - Python',
  url: 'https://gylgyl2000.github.io/',
  baseUrl: '/', // MyWebDevWiki/
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/otter-solid.svg',
  organizationName: 'gylgyl2000', // Usually your GitHub org/user name.
  projectName: 'gylgyl2000.github.io', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    hideableSidebar: true,
    sidebarCollapsible: true,
    navbar: {
      title: 'WIKI DEV WEB par LaLoutre',
      logo: {
        alt: 'Otter',
        src: 'img/otter-solid.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: 'outils',
          label: 'Outils',
          position: 'right',
        },
        /* {to: 'blog', label: 'Blog', position: 'left'}, */
        {
          href: 'https://github.com/gylgyl2000/gylgyl2000.github.io',
          className:'github',
          position: 'right',
        },
      ],

    },
    algolia: {
      apiKey: 'c0161980dcadfcb44af00f8712eb928c',
      indexName: 'YK65IDS378',

      // Optional: see doc section bellow
      // contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gylgyl2000/laloutre.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gylgyl2000/laloutre.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
      '@docusaurus/plugin-ideal-image',
      'docusaurus-plugin-sass',
  ],
};
