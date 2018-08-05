import React from 'react';
import Clientes from '../molecules/Clientes';

const NuestrosClientes = props => (
  <div className="container-fluid">
    <div className="margin-top-lg row justify-content-center ">
      {props.data.length && (
        <h1 className="font-color-blue font-weight-600 text-center font-size-21 padding-top-xs border-top-blue">
          Ultimos en pedir servicio
        </h1>
      )}

      <Clientes data={props.data} />
    </div>
  </div>
);

export default NuestrosClientes;
