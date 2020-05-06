import { getMockFile } from 'api/config';
import firebaseAdmin from 'firebase-admin';

type SnapshotCallback = (snapshot: unknown) => void;

class FirebaseDatabaseMock {
  responseFile = getMockFile();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scopedResponse: any = this.responseFile;

  ref(path: string) {
    this.scopedResponse = this.responseFile[path];
    return this;
  }

  equalTo(id: string) {
    const singleResult = this.scopedResponse[id];
    this.scopedResponse = singleResult;
    return this;
  }

  orderByChild(_) {
    return this;
  }

  orderByKey(_) {
    return this;
  }

  on(_path: string, callback: SnapshotCallback) {
    callback({
      val: () => this.scopedResponse,
      exists: () => !!this.scopedResponse,
    });
  }
}

export const firebaseDatabaseMock = (new FirebaseDatabaseMock() as unknown) as ReturnType<
  typeof firebaseAdmin.database
>;
