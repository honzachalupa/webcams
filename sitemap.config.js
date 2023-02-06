/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://janchalupa.dev/",
    generateRobotsTxt: true,
    exclude: ["/sign-in", "/sign-out", "/administration"],
};
