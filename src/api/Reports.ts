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

export const getSimplifiedReports = (): Promise<SimplifiedReport[]> =>
  getReports().then((reports) =>
    reports.map((currentReport) =>
      pick(currentReport, [
        'eventDescription',
        'eventLocation',
        'eventLocationExtra',
        'eventTime',
        'vehicleBrand',
        'vehicleColor',
        'vehicleModel',
        'id',
      ]),
    ),
  );
