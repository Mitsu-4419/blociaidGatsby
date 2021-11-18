const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}



module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Ko-rin Yamada Portfolio site`,
    description: `portfolio site of Korin Yamada who is software engineer and doctor`,
    author: `Ko-rin Yamada`,
    siteUrl: `https://blockaid.tokyo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    {
      resolve:`gatsby-plugin-sitemap`,
      options:{
        excludes:[`/en/blog/sekaisippaizukan/`, `/en/blog/ikyoku/`,`/en/blog/atcoder1/`,`/en/blog/atcoder2/`,`/en/blog/atcoder3/`,`/en/blog/atcoder4/`,`/en/blog/atcoder5/`,`/en/blog/atcoder6/`,`/en/blog/atcoder7/`,`/en/blog/atcoder8/`,`/en/blog/atcoder9/`,`/en/blog/atcoder10/`,`/en/blog/atcoder11/`,`/en/blog/atcoder12/`,`/en/blog/atcoder13/`,
        `/en/blog/atcoder14/`,`/en/blog/atcoder15/`,`/en/blog/atcoder16/`,`/en/blog/atcoder17/`,`/en/blog/atcoder18/`,`/en/blog/atcoder19/`,`/en/blog/atcoder20/`,`/en/blog/atcoder21/`,`/en/blog/atcoder22/`,
        `/en/blog/dfinity/`,`/en/blog/cardiacsurgeon3/`,`/en/blog/cardiacsurgeon2/`,`/en/blog/ctsurgeon/`, `/en/blog/ochiai/`, `/en/blog/tokyogsacademy/`,`/en/blog/rugby_ireland/`, '/en/blog/teidogaikokujin/',
        `/en/blog/statictest2/`,`/en/blog/statistic/`, `/en/blog/usmle2/`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blockaid.tokyo`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        
      },
    },
    `gatsby-plugin-typegen`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              withWebp: true,
            },
          },
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-E9BTM94001"
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogHinagataMarkdown } }) => {
              return allContentfulBlogHinagataMarkdown.edges.map(({ node }) => {
                return {
                  title: node.title,
                  description: node.content.childMarkdownRemark.excerpt,
                  date: node.createdAt,
                  url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  image:'./src/images/blockaid_icon_bgnone.png'
                }
              })
            },
            query: `
              {
                allContentfulBlogHinagataMarkdown(
                  limit: 5 
                  sort: { fields: createdAt, order: DESC },
                  filter: {node_locale: {eq: "ja"}}
                ) {
                  edges {
                    node {
                      title
                      slug
                      content {
                        childMarkdownRemark {
                          excerpt
                        }
                      }
                      createdAt
                      mainThumbnail {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            title: "KorinYamada Blog",
            feed_url: "https://blockaid.tokyo/blog/rss.xml",
            site_url: "https://blockaid.tokyo/blog",
            docs: "http://github.com/dylang/node-rss",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`],
        // language file path
        defaultLanguage: `ja`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
      },
    },
  ],
}
