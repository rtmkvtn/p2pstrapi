'use strict';

/**
 * branding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::branding.branding');
