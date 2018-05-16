module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Contributte - First class extensions for Nette Framework',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Contributte packages are first class extensions for Nette Framework.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'contributte, nette, symfony, extensions, mvc, application, http, security, utils, database'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    'highlight.js/styles/agate.css',
    '~/assets/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
   * Enabled modules
   */
  modules: [
    'bootstrap-vue/nuxt',
  ],
  /*
   * Enabled plugins
   */
  plugins: [
    {src: '~/plugins/highlight.js', ssr: false},
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'markdown-it-loader',
        exclude: /(node_modules)/,
        options: {
          preset: "default",
          html: true,
          linkify: true,
          typographer: true,
          breaks: false,
          use: [
            require('markdown-it-emoji'),
            require('twemoji'),
            [require('markdown-it-github-headings'), {"enableHeadingLinkIcons": false}]
          ]
        }
      });

      // md.renderer.rules.emoji = function (token, idx) {
      //   return twemoji.parse(token[idx].content);
      // }
    }
  },
  render: {
    resourceHints: false,
  }
};
