import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  static propTypes = {};

  state = {
    has_error: false,
    message: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      has_error: true,
      message: info,
    });
  }

  render() {
    const { has_error, message } = this.state;
    const { children } = this.props;
    sessionStorage.setItem('error_msg', message);
    if (has_error) {
      setTimeout(() => {
        this.setState({ has_error: false });
      }, 0);
      return <Redirect to="/oops/" />;
    }
    return children;
  }
}
