import React from 'react';
import FontAwesome from 'react-fontawesome';

const Cliente = (props) => {
  const correo = props.data['Correo contacto'];
  const direccion = props.data.Direccion;
  const compania = props.data['Nombre Compania'];
  const nombre = props.data['Nombre Contacto'];
  const telefono = props.data['Telefono Contacto'];

  return (
    <div className="border-orange border-radius padding-sm text-left margin-bottom-xs">
      <h1 className="font-weight-600">
        {nombre}
      </h1>
      <p>
        <FontAwesome name="address" className="d-inline-block" />
        {direccion}
      </p>
    </div>
  );
};

export default Cliente;
