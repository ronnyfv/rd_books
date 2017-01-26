import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import _ from 'lodash';

import appReducer from './containers/shared/reducer';

/**
 * rota inicial da aplicação. usado pelo react-router-redux
 */
const routeInitialState = {
    locationBeforeTransitions: null,
};


/**
 * Adiciona route no app state.
 */
function routeReducer(state = routeInitialState, action) {
    switch (action.type) {

        case LOCATION_CHANGE:
            return _.merge(state, {
                locationBeforeTransitions: action.payload,
            });

        default:
            return state;
    }
}


/**
 * Combina os reducers para criar o reducer principal da aplicação
 */
export default function createReducer() {
    return combineReducers({
        route: routeReducer,
        app: appReducer,
    });
}
