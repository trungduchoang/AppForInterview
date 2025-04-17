module.exports = {
  // debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  reloadOnPrerender: process.env.APP_ENV === "local",
};
