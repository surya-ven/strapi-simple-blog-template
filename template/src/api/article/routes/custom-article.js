module.exports = {
  routes: [
    // For backend only: replacing findOne by Id with findOne by slug
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/articles/:slug',
      handler: 'article.findOne',
    },
  ]
}