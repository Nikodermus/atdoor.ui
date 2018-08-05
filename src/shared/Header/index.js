import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

import logo from '../../resources/svg/logo.svg';

class Header extends Component {
  componentDidMount() {
    document.body.style.paddingTop = `${this.header.offsetHeight}px`;
  }

  goToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <header
        className="row fixed-top padding-sm font-size-21 border-orange font-color-orange bg-white header align-items-center"
        ref={header => (this.header = header)}
      >
        <div className="col">
          <h1 onClick={this.goToHome} className="text-left">
            <img src={logo} alt="" className="header__logo" />
          </h1>
        </div>
        <div className="col-2 text-right">
          <FontAwesome name="bars" className="font-color-orange" />
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
