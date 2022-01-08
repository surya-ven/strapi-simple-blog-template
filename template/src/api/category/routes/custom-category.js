module.exports = {
  routes: [
    // For backend only: replacing findOne by Id with findOne by slug
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/categories/:slug',
      handler: 'category.findOne',
    },
  ]
}