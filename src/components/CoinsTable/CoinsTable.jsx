// react
import React, { Component } from 'react';

// semantic-ui
import { Table, Menu, Label, Icon, Pagination } from 'semantic-ui-react';

// components
import Coins from './components/Coins';

// axios
import axios from 'axios';

export default class CoinTable extends Component {
  componentDidMount() {
    this.props.getCoins();
  }

  onPaginationChange = (e, { activePage }) => {
    this.props.setPage({ page: activePage });
  };

  render() {
    const { page, exchange } = this.props;
    return (
      <div>
        <Table celled fixed={true} textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Label ribbon> Order Number</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>Coin Icon</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>Coin Name</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>USD</Label>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Coins coins={this.props.coins} page={page} exchange={exchange} />
        </Table>
        <Pagination
          activePage={page}
          onPageChange={this.onPaginationChange}
          totalPages={10}
        />
      </div>
    );
  }
}
