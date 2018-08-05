import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import geocoder from 'geocoder';
import InputIcon from '../atoms/InputIcon';

class InputLocalizador extends Component {
  state = {
    direccion: '',
  };

  dondeEstoy = () => {
    navigator.geolocation.getCurrentPosition(this.actualizarPosicion);
  };

  actualizarPosicion = (position) => {
    const { latitude, longitude } = position.coords;
    geocoder.reverseGeocode(latitude, longitude, (err, data) => {
      this.setState({
        direccion: data.results[0].formatted_address,
      });
    });
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <InputIcon className="border-blue border-radius-xs">
        <input
          type="text"
          className="padding-sm"
          placeholder="¿Donde te encuentras?"
          name="direccion"
          value={this.state.direccion}
          onChange={this.inputChange}
        />
        <FontAwesome name="location-arrow" onClick={this.dondeEstoy} />
      </InputIcon>
    );
  }
}

export default InputLocalizador;
