import { database } from 'api/database';
import { Report } from 'models/Report';

export const getReports = () =>
  new Promise((resolve) => {
    database
      .ref('reports')
      .orderByChild('eventTime')
      .on('value', (snapshot) => {
        const values = snapshot.val();
        resolve(values);
      });
  }).then<Report[]>((reports) =>
    Object.entries(reports).map(([id, reportData]) => ({
      ...reportData,
      id,
    })),
  );
