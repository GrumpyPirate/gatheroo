import { connect } from 'react-redux';

import { setTime } from 'store/actions/time';

import App from './App.component';

const mapStateToProps = state => ({
  eorzeaHours: state.time.eorzeaHours,
  eorzeaMinutes: state.time.eorzeaMinutes
});

const mapDispatchToProps = { setTime };

export default connect(mapStateToProps, mapDispatchToProps)(App);
