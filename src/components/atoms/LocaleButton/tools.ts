const flagByLocale = {
  fr: "/flags/vietnam.svg", // TODO:
  en: "/flags/american.svg",
} as { [key in TSupportedLanguages]: string };

export const getFlagByLanguage = (language: TSupportedLanguages) =>
  flagByLocale[language];
