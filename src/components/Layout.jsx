//react
import React from 'react';
import { Link } from 'react-router-dom';

//semantic components
import { Header, Container, Divider, Icon, Image } from 'semantic-ui-react';

//styles
import classes from './Layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <div className={classes.Header}>
        <Image src="../../assets/bitcoin.png" />
        <Header as="h1">Coins Table</Header>
        <Image src="../../assets/bitcoin.png" />
      </div>
      {children}
      <Divider />
      <p className={classes.Footer}>
        <Icon name="hand scissors" color="blue" /> by Alex_Sandok
      </p>
    </Container>
  );
};

export default Layout;
