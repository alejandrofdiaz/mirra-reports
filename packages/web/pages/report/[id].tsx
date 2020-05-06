import { useTranslation } from '_i18n';
import { getReport } from 'api/Reports';
import { Report } from 'components/Report';
import { Report as ReportModel } from 'models/Report';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  report: ReportModel;
}

type ParsedQuery = Record<'id', string>;

export const ReportPage = ({ report }: Props) => {
  const locale = useTranslation();
  return (
    <section className="reportsPage">
      <h1>{locale.t('reports')}</h1>
      <div className="container reportsList">
        <Report currentReport={report} />
      </div>
    </section>
  );
};

export default ReportPage;

export const getServerSideProps: GetServerSideProps<
  Props,
  ParsedQuery
> = async (context) => {
  const report = await getReport(context.params.id);
  return {
    props: { report },
  };
};
