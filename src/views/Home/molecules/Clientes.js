import React from 'react';
import Cliente from '../atoms/Cliente';

const Clientes = props => (
  <div className="col-12 margin-top-sm">
    {props.data.slice(0, 4).map((cliente, id) => (
      <Cliente data={cliente} key={id} />
    ))}
  </div>
);

export default Clientes;
