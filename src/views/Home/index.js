import React, { Component } from 'react';
import serialize from 'form-serialize';

import PedirServicio from './organisms/PedirServicio';
import HomeSlider from './organisms/HomeSlider';
import Loader from '../../shared/Loader';
import Message from '../../shared/Message';
import firebase from '../../data/firebase';

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
    clients: firebase.database().ref('companies'),
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const newState = [];
      for (const item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        clients: newState,
      });
    });
  }

  crearServicio = (e) => {
    e.preventDefault();

    const data = serialize(e.target, { hash: true });
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
    console.log(parsed_bool);
    this.setState({
      message: {
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
        <PedirServicio onSubmit={this.crearServicio} />
        <Loader visible={this.state.loader.visible} onClick={() => this.setearLoader(false)} />
        <Message
          visible={this.state.message.visible}
          message={this.state.message.text}
          onClick={() => this.setearMensaje(false)}
        />
      </React.Fragment>
    );
  }
}

export default Home;
