module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/_error',
        destination: '/404'
      }
    ]
  }
}
