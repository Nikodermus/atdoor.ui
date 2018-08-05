import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Loader extends Component {
  state = {
    className: 'bg-white border-radius-round padding-sm loader',
  };

  render() {
    return (
      <div className={`${this.state.className} ${this.props.visible ? '' : 'loader--out'}`}>
        <FontAwesome name="spinner" className="font-size-28 loader__icon font-color-blue" />
      </div>
    );
  }
}

export default Loader;
