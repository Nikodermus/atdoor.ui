import React, { Component } from 'react';

class InputIcon extends Component {
  renderInput = () => {
    if (this.props.children) {
      return this.props.children.filter(elem => elem.type === 'input')[0];
    }
    return null;
  };

  renderIcon = () => {
    if (this.props.children) {
      return this.props.children.filter(elem => elem.type !== 'input')[0];
    }
    return null;
  };

  render() {
    return (
      <div className={`input d-flex align-items-center input-icon ${this.props.className}`}>
        {this.renderInput()}
        {this.renderIcon()}
      </div>
    );
  }
}

export default InputIcon;
