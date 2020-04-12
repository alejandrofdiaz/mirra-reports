import camelcase from 'camelcase-keys';
import fs from 'fs';
import locale from 'localeService';
import path from 'path';

type FirebaseAdmin = Record<
  | 'authProviderX509CertUrl'
  | 'authUri'
  | 'clientEmail'
  | 'clientId'
  | 'clientX509CertUrl'
  | 'privateKeyId'
  | 'privateKey'
  | 'projectId'
  | 'tokenUri'
  | 'type',
  string
>;

const {
  ADMIN_PATH = 'somePath',
  MOCK_PATH = 'someMockPath',
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  DATABASE_URL,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} = process.env;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const getFirstFileFromDir = (directoryPath: string) => {
  const fileDirPath = path.join(process.cwd(), directoryPath);

  const fileName = fs.readdirSync(fileDirPath)[0];
  const filePath = path.join(fileDirPath, fileName);
  const file = fs.readFileSync(filePath, { encoding: 'UTF-8' });
  return JSON.parse(file);
};

export const getMockFile = (): Record<string, unknown> => {
  try {
    return getFirstFileFromDir(MOCK_PATH);
  } catch (e) {
    throw Error(locale.t('firebaseMockNotFound'));
  }
};

export const getAdminFile = (): FirebaseAdmin => {
  try {
    const file = getFirstFileFromDir(ADMIN_PATH);
    return camelcase(file);
  } catch (e) {
    throw Error(locale.t('adminFileNotfound'));
  }
};

export const adminFile = getAdminFile();
