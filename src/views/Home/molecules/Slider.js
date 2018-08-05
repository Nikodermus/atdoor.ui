import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Slider extends Component {
  state = {
    current: 0,
    count: this.props.children.length - 1,
    css: `
    #${this.props.id} .slider__inner{
      width: ${this.props.children.length * 100}%;

    }

    #${this.props.id} .slider__slide{
      flex-basis: ${100 / this.props.children.length}%;
    }
  `,
  };

  changeCurrent = (number) => {
    this.setState(({ current, count }) => {
      const sum = current + number;
      return { current: number < 0 ? Math.max(0, sum) : Math.min(count, sum) };
    });
  };

  render() {
    return (
      <div className="slider__wrapper">
        <FontAwesome
          name="caret-left"
          className="slider__icon slider__icon--left"
          onClick={() => this.changeCurrent(-1)}
        />
        <div
          className="slider"
          id={this.props.id}
          style={{ left: `-${this.state.current * 100}%` }}
        >
          <figure className="slider__inner d-flex">
            {this.props.children}
          </figure>
        </div>
        <FontAwesome
          name="caret-right"
          className="slider__icon slider__icon--right"
          onClick={() => this.changeCurrent(1)}
        />
        <style>
          {this.state.css}
        </style>
      </div>
    );
  }
}

export default Slider;
