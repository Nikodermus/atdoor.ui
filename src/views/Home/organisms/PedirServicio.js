import React from 'react';
import FontAwesome from 'react-fontawesome';

import InputLocalizador from '../molecules/InputLocalizador';
import InputIcon from '../atoms/InputIcon';

const PedirServicio = props => (
  <form className="pedir-servicio container-fluid" onSubmit={props.onSubmit}>
    <div className="row margin-top">
      <div className="col-12 form-group margin-bottom-xs">
        <input type="text" placeholder="Nombre" name="nombre"/>
        <textarea rows="4" placeholder="¿Qué necesitas?" />
      </div>
      <div className="col-12">
        <InputIcon className="border-blue border-radius-xs margin-bottom-xs">
          <input type="text" className="padding-sm" placeholder="Contacto" name="contacto"/>
          <FontAwesome name="whatsapp" />
        </InputIcon>
      </div>
      <div className="col-12">
        <InputLocalizador />
      </div>
    </div>
  </form>
);

export default PedirServicio;
