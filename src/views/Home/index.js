import React, { Component } from 'react';
import serialize from 'form-serialize';

import PedirServicio from './organisms/PedirServicio';
import HomeSlider from './organisms/HomeSlider';
import Loader from '../../shared/Loader';
import Message from '../../shared/Message';
import firebase from '../../data/firebase';
import NuestrosClientes from './organisms/NuestrosClientes';

class Home extends Component {
  state = {
    loader: {
      visible: false,
    },
    message: {
      visible: false,
      text: '',
      timeout: null,
    },
    clients: [],
  };

  componentDidMount() {
    const items_ref = firebase.database().ref('companies');
    items_ref.on('value', this.updateValues);
    items_ref.on('child_changed', this.updateValues);
  }

  updateValues = (snapshot) => {
    const items = snapshot.val();
    this.setState({
      clients: items,
    });
  };

  crearServicio = (e) => {
    e.preventDefault();

    const items_ref = firebase.database().ref('companies');
    const data = serialize(e.target, { hash: true });
    items_ref.push(data);
    this.setearMensaje(true, 'Petición creada');
  };

  setearLoader = (bool) => {
    const parsed_bool = Boolean(bool);
    this.setState({
      loader: {
        visible: parsed_bool,
      },
    });
  };

  setearMensaje = (bool, message = '') => {
    const parsed_bool = Boolean(bool);
    this.setState({
      message: {
        text: message,
        visible: parsed_bool,
      },
    });

    if (parsed_bool) {
      const timeout = setTimeout(() => {
        this.setearLoader(false);
        this.setState({
          message: {
            timeout: null,
          },
        });
      }, 3000);

      this.setState({
        message: {
          timeout,
        },
      });
    }

    if (!parsed_bool && this.state.timeout) {
      clearTimeout(this.state.message.timeout);
      this.setState({
        message: {
          timeout: null,
        },
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeSlider />
        <PedirServicio onSubmit={this.crearServicio} setearMensaje={this.setearMensaje} />
        <Loader visible={this.state.loader.visible} />
        <Message
          visible={this.state.message.visible}
          message={this.state.message.text}
          onClick={() => this.setearMensaje(false)}
        />
        <NuestrosClientes data={this.state.clients} />
      </React.Fragment>
    );
  }
}

export default Home;
