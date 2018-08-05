import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loader = props => (props.visible ? (
  <div className="loader bg-white border-radius-round padding-sm">
    <FontAwesome name="spinner" className="font-size-28 loader__icon font-color-blue" />
  </div>
) : null);

export default Loader;
