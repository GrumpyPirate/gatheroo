import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './App.module.scss';

class App extends Component {
  componentDidMount() {
    const { setTime } = this.props;

    this.timerInterval = setInterval(() => setTime(new Date().getTime()), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    const { eorzeaMinutes, eorzeaHours } = this.props;

    return (
      <div className={classes['app']}>
        <span className={classes['app__timer']}>
          {eorzeaHours}:{eorzeaMinutes}
        </span>
      </div>
    );
  }
}

App.propTypes = {
  setTime: PropTypes.func.isRequired,
  eorzeaMinutes: PropTypes.string.isRequired,
  eorzeaHours: PropTypes.string.isRequired
};

export default App;
