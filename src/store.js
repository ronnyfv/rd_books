import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import sharedSaga from './containers/shared/saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    // caso desenvolvimento, ativa o logger de request para o console do navegador
    if (process.env.NODE_ENV !== 'production') {
        const loggers = require('./helpers/logger'); // eslint-disable-line global-require
        middlewares.push(loggers.devLogger);
    }

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // Caso desenvolvimento, verifica se DevTool do Redux está instalada, caso contrario, usa o Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    /* eslint-enable */

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    // Extensions
    sagaMiddleware.run(sharedSaga);

    return store;
}
