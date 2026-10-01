const configuredSiteUrl = process.env.SITE_URL || "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
