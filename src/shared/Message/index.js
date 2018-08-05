import React, { Component } from 'react';

class Message extends Component {
  state = {
    className:
      'bg-white border-radius-lg padding-sm message font-weight-500 text-center font-color-grey',
  };

  render() {
    return (
      <div className={`${this.state.className} ${this.props.visible ? '' : 'message--out'}`}>
        {this.props.message}
      </div>
    );
  }
}

export default Message;
