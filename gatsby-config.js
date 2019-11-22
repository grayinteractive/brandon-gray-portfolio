module.exports = {
  siteMetadata: {
    title: `Brandon Gray - Front End Developer`,
    siteUrl: `https://www.brandongray.dev`,
    description: `Personal website/portfolio of Brandon Gray, a front end web developer from Canada.`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `PT Sans`,
          `PT Serif`,
          `lato`,
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/static/img/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `UA-146062164-1`,
        // Puts tracking script in the head instead of the body
        head: false,
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://306524562ee347dfaa73bbebd7ae2ba3@sentry.io/1251887',
      }
    },
    {
      resolve: `gatsby-plugin-remove-trailing-slashes`
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
  ],
}
