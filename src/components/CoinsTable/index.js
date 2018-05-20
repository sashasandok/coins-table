// Redux
import { connect } from 'react-redux';

// components
import CoinsTable from './CoinsTable';

// actions
import { getCoins, setPage } from '../../actions/coins-action';
import { getExchanges } from '../../actions/exchange-action';

const mapStateToProps = state => ({
  isFetching: state.coin.isFetching,
  coins: state.coin.items[state.coin.page] || [],
  page: state.coin.page,
  exchange: state.exchange.items
});

const mapDispatchToProps = dispatch => ({
  getCoins: () => dispatch(getCoins()),
  setPage: args => dispatch(setPage(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsTable);
