import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

//ESTADO
const estado = {
    numero: 1
};

//REDUCTORES
const reductores = (estado,accion) =>{
    switch (accion.type) {
        case "AUMENTAR":
            var newEstado = Object.assign({},estado);
            ++newEstado.numero;
            return newEstado;
        case "DISMINUIR":
            var newEstado = Object.assign({},estado);
            --newEstado.numero;
            return newEstado;
    }
    return estado;
};

//STORE
const store = createStore(reductores, estado);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
