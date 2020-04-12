import { database } from 'api/database';
import { Report } from 'models/Report';

export const getReports = () =>
  new Promise<Report[]>((resolve) => {
    database
      .ref('reports')
      .orderByChild('eventTime')
      .on('value', (snapshot) => {
        resolve(Object.values(snapshot.val()));
      });
  });
