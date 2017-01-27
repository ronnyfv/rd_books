/**
 * babel-polyfill necessário pelo redux-saga
 */
import 'babel-polyfill';

/**
 * bibliotecas de terceiros
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/**
 * css reset
 */
import 'sanitize.css/sanitize.css';

/**
 * estilo principal, main.scss chama todas os outras arquivos de estilo, incluindo fonte e variáveis
 */
import './main.scss';

// rotas da aplicação
import { routes } from './routes';

// store da aplicação
import configureStore from './store';

import { selectLocationState } from './containers/shared/selectors';

const initialState = {};
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
});

/**
 * render
 */
function init() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
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
