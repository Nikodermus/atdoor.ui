import React, { Component } from 'react';
import PedirServicio from './organisms/PedirServicio';
import HomeSlider from './organisms/HomeSlider';
import Loader from '../../shared/Loader';

const crearServicio = () => {};

class Home extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <React.Fragment>
        <HomeSlider />
        <PedirServicio onSubmit={crearServicio} />
        <Loader visible={this.state.visible} />
      </React.Fragment>
    );
  }
}

export default Home;
