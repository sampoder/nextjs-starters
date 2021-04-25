module.exports = {
  images: {
    domains: ["github.com", "identicon.rmhdev.net", "avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: '/docs/:slug',
        destination: 'https://raw.githubusercontent.com/vercel/next.js/canary/examples/cms-wordpress/docs/:slug',
        permanent: true,
      },
    ]
  },
};
