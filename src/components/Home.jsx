//react
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Layout from './Layout';
import CoinsTable from './CoinsTable';

const Home = () => {
  return (
    <Layout>
      <CoinsTable />
    </Layout>
  );
};

export default Home;
