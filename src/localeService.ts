import i18n from 'i18n';
import localeType from 'locales/es.json';
import path from 'path';

type i18nType = typeof i18n;

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface i18nExtended extends i18nType {
  t: (key: keyof typeof localeType) => string;
}

const localService = {} as i18nExtended;

i18n.configure({
  locales: ['es'],
  defaultLocale: 'es',
  directory: path.join(process.cwd(), 'src', 'locales'),
  register: localService,
  api: {
    __: 't',
    __n: 'tn',
  },
});

export default localService;
