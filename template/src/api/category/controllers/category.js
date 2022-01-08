'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async findOne(ctx) {
        // id is the slug as defined in ./routes/custom-article.js
        const { id: slug } = ctx.params;

        // Use custom service to get the article
        const entity = await strapi.service('api::category.category')
                                .findOne(slug, ctx.query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity); 
  }
}));
