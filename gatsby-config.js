/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const graphqlOptions = {
    typeName: 'wagtail',
    fieldName: 'wagtail',
    url: 'http://localhost:4243/graphql/',
};

module.exports = {
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-wagtail",
            options: {
                url: 'http://localhost:4243/graphql/',
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: graphqlOptions,
        },
        {
            resolve: 'gatsby-plugin-graphql-preview',
            options: {
                ...graphqlOptions,
                previewQueryParam: 'preview',
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
            options: {},
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Lato'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-preconnect',
            options: {
                domains: [
                    {
                        domain: 'https://fonts.gstatic.com',
                        crossOrigin: true,
                    },
                    {
                        domain: 'https://fonts.googleapis.com',
                        crossOrigin: true,
                    },
                ],
            },
        },
    ],
    proxy: [
        {
            prefix: "/wagtail",
            url: "http://localhost:4243",
        },
        {
            prefix: "/static",
            url: "http://localhost:4243",
        },
        {
            prefix: "/media",
            url: "http://localhost:4243",
        },
    ],
};
