import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hwaseong!`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      // This is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't5udemul',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
