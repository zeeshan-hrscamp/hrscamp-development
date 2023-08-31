import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `HRSCAMP`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    // --- IMAGES ---
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // --- SOURCE ---
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // --- markdown ---
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
        ],
      },
    },
    // -------------
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // --- STYLE ---
    `gatsby-plugin-postcss`,
    // --- PWA ---
    `gatsby-plugin-offline`,
  ]
};

export default config;
