import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.informacion}
        </p>
        <button onClick={this.props.aumentar}>Aumentar</button>
        <button onClick={this.props.disminuir}>Disminuir</button>
      </div>
    );
  }
}

//Ahora faltarían los dispatch a nivel de Store  y los observer... En lugar de eso se hacen dos mapeos que ya se encarga de eso....

//Función que devolverá un objeto con valorDisponibleDesdeProps: estado.valorDelEstadoPrincipal
const mapStateToProps = (state) => {
  return {
    informacion: state.numero
  }
}
//Objeto que mapeará funciones que harán la funcionalidad de store.dispatch( el objeto que devuelva cada funcion )
const mapDispatchToProps = {
    aumentar: function(){ return { type:"AUMENTAR" };},
    disminuir: ()=>{ return { type:"DISMINUIR" }; }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
