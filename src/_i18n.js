// export { appWithTranslation, i18n, withTranslation } from '../i18n';

const NextI18n = require('next-i18next').default;

const i18n = new NextI18n({
  defaultLanguage: 'es',
  otherLanguages: ['en'],
});

const { appWithTranslation, withTranslation, useTranslation } = i18n;

module.exports = {
  i18n,
  appWithTranslation,
  useTranslation,
  withTranslation,
};
