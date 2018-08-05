import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    document.body.style.paddingTop = `${this.header.offsetHeight}px`;
  }

  goToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <header className="row fixed-top padding font-size-21 bg-orange font-color-white" ref={header => (this.header = header)}>
        <div className="col-2">
          <FontAwesome name="bars" className="" />
        </div>
        <div className="col">
          <h1 onClick={this.goToHome}>
AtDoor
          </h1>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
