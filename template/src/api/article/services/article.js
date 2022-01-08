'use strict';

/**
 * article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

// Default
// module.exports = createCoreService('api::article.article');

// For backend only: replacing findOne by Id with findOne by slug
module.exports = createCoreService('api::article.article', ({ strapi }) => ({
    // Custom findOne service
    async findOne(targetSlug) {
        const response = await strapi.db.query('api::article.article').findOne({
            where: {
                slug: targetSlug,
            },
            populate: true // Populates relations and images too
        });
        return response;
    }
}));
