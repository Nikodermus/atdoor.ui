import React from 'react';
import Slider from '../molecules/Slider';
import Slide from '../atoms/Slide';

import slide_image from '../../../resources/images/test.png';
import slide_image_r from '../../../resources/images/test@2x.png';

const HomeSlider = props => (
  <Slider>
    <Slide image={slide_image} image_retina={slide_image_r} />
  </Slider>
);

export default HomeSlider;
