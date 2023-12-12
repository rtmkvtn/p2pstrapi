"use strict";

/**
 * setting controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::setting.setting", ({ strapi }) => ({
  getInitSettings: async (ctx) => {
    try {
      const settings = await strapi.db
        .query("api::setting.setting")
        .findOne({ populate: ["buttons_urls", "referral_fees", "fees"] });
      const socialMediaLinks = await strapi.db
        .query("api::social-media-link.social-media-link")
        .findMany({ select: ["type", "url"] });
      const videos = await strapi.db
        .query("api::video.video")
        .findMany({ populate: true });
      const videosForFront = videos.map((x) => ({
        language: x.locale,
        link: x.file.url,
      }));
      const docs = await strapi.db
        .query("api::document.document")
        .findMany({ populate: true });
      const bottomDocsForFront = {
        usersAgreement: {
          ru: docs.find(
            (doc) => doc.key === "user_agreement" && doc.locale === "ru"
          ),
          en: docs.find(
            (doc) => doc.key === "user_agreement" && doc.locale === "en"
          ),
        },
        privacyPolicy: {
          ru: docs.find(
            (doc) => doc.key === "privacy_policy" && doc.locale === "ru"
          ),
          en: docs.find(
            (doc) => doc.key === "privacy_policy" && doc.locale === "en"
          ),
        },
        risks: {
          ru: docs.find((doc) => doc.key === "risks" && doc.locale === "ru"),
          en: docs.find((doc) => doc.key === "risks" && doc.locale === "en"),
        },
        aml: {
          ru: docs.find((doc) => doc.key === "aml" && doc.locale === "ru"),
          en: docs.find((doc) => doc.key === "aml" && doc.locale === "en"),
        },
      };
      const branding = await strapi.db
        .query("api::branding.branding")
        .findOne({ populate: true });

      const brandingForFront = {
        logo: branding.logo?.url,
        favicon: branding.favicon?.url,
        companyName: branding.product_name,
      };
      return {
        settings: settings,
        socialLinks: socialMediaLinks,
        video: videosForFront,
        bottomDocs: bottomDocsForFront,
        branding: brandingForFront,
      };
    } catch (e) {
      console.log(e);
    }
  },
}));
