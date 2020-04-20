import { useTranslation } from '_i18n';
import { getReports } from 'api/Reports';
import { SimplifiedReport } from 'components/SimplifiedReport';
import { Report } from 'models/Report';
import { GetServerSideProps } from 'next';
import React from 'react';

interface ReportsPageProps {
  reports: Report[];
}

const Reports = ({ reports }: ReportsPageProps) => {
  const locale = useTranslation();
  return (
    <section className="reportsPage">
      <h1>{locale.t('reports')}</h1>
      <div className="container reportsList">
        {reports.map((currentReport) => (
          <SimplifiedReport
            currentReport={currentReport}
            key={currentReport.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Reports;

export const getServerSideProps: GetServerSideProps<ReportsPageProps> = async (
  _context,
) => {
  const reports = await getReports();
  return {
    props: { reports },
  };
};
