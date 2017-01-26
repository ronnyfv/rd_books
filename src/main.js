// importando bibliotecas de terceiros
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// css reset
import 'sanitize.css/sanitize.css';

// estilo principal
import './main.scss';

// rotas da aplicação
import { routes } from './routes';

// store da aplicação
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState, browserHistory);

/**
 * render
 */
function init() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
                {routes()}
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}

/**
 * init
 */
init();
