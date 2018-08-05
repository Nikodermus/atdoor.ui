import React from 'react';
import { RETINA } from '../../../constants/media';

const Slide = props => (
  <picture>
    <source media={RETINA} srcSet={props.image_retina} />
    <img src={props.image} alt="" />
  </picture>
);

export default Slide;
