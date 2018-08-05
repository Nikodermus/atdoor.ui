import React from 'react';
import FontAwesome from 'react-fontawesome';

import InputLocalizador from '../molecules/InputLocalizador';
import InputIcon from '../atoms/InputIcon';

const PedirServicio = props => (
  <form className="pedir-servicio container-fluid" onSubmit={props.onSubmit}>
    <div className="row margin-top justify-content-center">
      <div className="col-12 form-group margin-bottom-xs">
        <input type="text" placeholder="Nombre" name="Nombre Contacto" />
        <textarea rows="4" placeholder="¿Qué necesitas?" name="Nombre Compania" />
      </div>
      <div className="col-12">
        <InputIcon className="border-blue border-radius-xs margin-bottom-xs">
          <input
            type="text"
            className="padding-sm"
            placeholder="Contacto"
            name="Telefono Contacto"
          />
          <FontAwesome name="whatsapp" />
        </InputIcon>
      </div>
      <div className="col-12">
        <InputLocalizador setearMensaje={props.setearMensaje} />
      </div>
      <div className="col-8">
        <input
          type="submit"
          value="Enviar"
          className="bg-blue font-color-white margin-top-xs font-weight-500 text-center padding-sm border-radius full-width"
        />
      </div>
    </div>
  </form>
);

export default PedirServicio;
