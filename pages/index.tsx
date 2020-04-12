import { getReports } from 'api/Reports';
import { GetStaticProps } from 'next';
import React from 'react';

const Home = () => <h1>Hello world</h1>;

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const reports = await getReports();
  console.log(reports);

  return new Promise((resolve) =>
    resolve({
      props: {
        test: 'test',
      },
    }),
  );
};
