import en from '@/i18n/en';

export const oemPage = {
  path: '/oem-odm',
  ...en.servicePages.oem,
};

export const factoryQualityPage = {
  path: '/factory-quality',
  ...en.servicePages.factoryQuality,
};

export const catalogPage = {
  path: '/request-catalog',
  ...en.servicePages.catalog,
};

export const homepageCapabilities = [
  {
    ...en.servicePages.homepageCapabilities[0],
    href: '/compatibility',
  },
  {
    ...en.servicePages.homepageCapabilities[1],
    href: oemPage.path,
  },
  {
    ...en.servicePages.homepageCapabilities[2],
    href: factoryQualityPage.path,
  },
  {
    ...en.servicePages.homepageCapabilities[3],
    href: catalogPage.path,
  },
];
