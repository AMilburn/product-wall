import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import LandingPage from './components/LandingPage';
import classNames from 'classnames';

import './App.scss';

class App extends React.Component {
  render() {
    const { ui } = this.props;
    return (
      <div>
        {ui.isLoading && <div className={classNames('loadingState', {
            'loaded': !ui.isLoading,
          })}
        >
          <div className="loadingState__container">
            <i className="loadingState__swoosh g72-swoosh" />
            <p className="text-color-primary-light headline-sm-base">Loading recommended products...</p>
          </div>
        </div>}
        {!ui.isLoading && <div className={classNames('appContainer', {
            'loaded': !ui.isLoading,
          })}
        >
          <LandingPage />
        </div>}
      </div>
    );
  }
}

LandingPage.propTypes = {
  ui: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
