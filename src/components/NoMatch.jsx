//react
import React from 'react';

// semantic components
import { Icon, Header } from 'semantic-ui-react';

//components
import Layout from './Layout';

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </Layout>
  );
};

export default NoMatch;
