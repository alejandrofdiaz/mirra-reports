import { adminFile, firebaseConfig } from 'api/config';
import { firebaseDatabaseMock } from 'api/mockDatabase';
import firebase from 'firebase-admin';
import { isProduction } from 'lib/isProduction';

// eslint-disable-next-line import/no-mutable-exports
let database: ReturnType<typeof firebase.database> = firebaseDatabaseMock;

if (isProduction()) {
  firebase.initializeApp({
    credential: firebase.credential.cert(adminFile),
    databaseURL: firebaseConfig.databaseURL,
  });

  database = firebase.database();
}

export { database };
