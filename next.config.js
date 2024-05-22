const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
})
