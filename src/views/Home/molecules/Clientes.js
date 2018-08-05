import React from 'react';
import Cliente from '../atoms/Cliente';

const returnClient = (props) => {
  const clientes = [];
  for (const key in props.data) {
    if (Number(key) > 98 || Number.isNaN(Number(key))) {
      clientes.push(<Cliente data={props.data[key]} key={key} />);
    }
  }
  return clientes;
};

const Clientes = props => (
  <div className="col-12 margin-top-sm">
    {returnClient(props)}
  </div>
);

export default Clientes;
