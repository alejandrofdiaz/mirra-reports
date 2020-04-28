import { database } from 'api/database';
import pick from 'lodash/pick';
import { Report } from 'models/Report';
import { SimplifiedReport } from 'models/SimplifiedReport';

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

export const getReport = (id: string) =>
  new Promise((resolve, reject) => {
    database
      .ref('reports')
      .orderByKey()
      .equalTo(id)
      .on('child_added', (snapshot) => {
        if (snapshot.exists()) {
          const values = snapshot.val();
          resolve(values);
          return;
        }

        reject();
      });
  }).then<Report>((report: Omit<Report, 'id'>) => ({ ...report, id }));

export const getSimplifiedReports = (): Promise<SimplifiedReport[]> =>
  getReports().then((reports) =>
    reports.map((currentReport) =>
      pick(currentReport, [
        'eventCoordinates',
        'eventDescription',
        'eventLocation',
        'eventLocationExtra',
        'eventTime',
        'id',
        'vehicleBrand',
        'vehicleColor',
        'vehicleModel',
      ]),
    ),
  );
