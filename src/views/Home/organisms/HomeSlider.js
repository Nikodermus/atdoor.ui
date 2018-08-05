import React from 'react';
import Slider from '../molecules/Slider';
import Slide from '../atoms/Slide';

import image_1 from '../../../resources/images/renault.png';
import image_1_r from '../../../resources/images/renault@2x.png';
import image_2 from '../../../resources/images/camioneta.png';
import image_2_r from '../../../resources/images/camioneta@2x.png';
import image_3 from '../../../resources/images/mazda.png';
import image_3_r from '../../../resources/images/mazda@2x.png';

const slides = [
  {
    image: image_1,
    retina: image_1_r,
    text: '',
  },
  {
    image: image_2,
    retina: image_2_r,
    text: '',
  },
  {
    image: image_3,
    retina: image_3_r,
    text: '',
  },
];

const HomeSlider = props => (
  <Slider id="homeSlider">
    {slides.map(data => (
      <Slide image={data.image} image_retina={data.retina} text={data.text} key={data.image} />
    ))}
  </Slider>
);

export default HomeSlider;
