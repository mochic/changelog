import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => ({ hasError: true });

  render = () => {
    if (this.state.hasError) {
      return <h2>the temporary blogging solution is experiencing issues rn...</h2>;
    }

    return this.props.children;
  };
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ErrorBoundary;
