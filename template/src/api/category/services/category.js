'use strict';

/**
 * category service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category.category', ({ strapi }) => ({
    // Custom findOne service
    async findOne(targetSlug, query) {
        let populateValue = true;
        if ("populate" in query) {
            populateValue = query.populate == "*" ? {
                articles: {
                    populate: true
                }
            } : populateValue;
        }
        
        const response = await strapi.db.query('api::category.category').findOne({
            where: {
                slug: targetSlug,
            },
            populate: populateValue // Populates relations and images too
        });
        return response;
    }
}));
