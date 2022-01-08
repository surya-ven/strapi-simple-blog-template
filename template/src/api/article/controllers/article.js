'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Default
// module.exports = createCoreController('api::article.article');

// For backend only: replacing findOne by Id with findOne by slug
// Uncomment code in ./routes/custom-article.js, and ./services/article.js too
module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async findOne(ctx) {
        // id is the slug as defined in ./routes/custom-article.js
        const { id: slug } = ctx.params;

        // Use custom service to get the article
        const entity = await strapi.service('api::article.article')
                                .findOne(slug);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity); 
  }
}));
