import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import geocoder from 'geocoder';

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
      <div className="border-grey border-radius-xs encuentrame d-flex align-items-center">
        <input
          type="text"
          className="encuentrame__input padding-sm"
          placeholder="¿Donde te encuentras?"
          name="direccion"
          value={this.state.direccion}
          onChange={this.inputChange}
        />
        <FontAwesome
          name="location-arrow"
          className="encuentrame__icon"
          onClick={this.dondeEstoy}
        />
      </div>
    );
  }
}

export default InputLocalizador;
