import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import _ from 'lodash';

import appReducer from './containers/shared/reducer';


// Initial routing state
const routeInitialState = {
    locationBeforeTransitions: null,
};


/**
 * Merge route into the global application state
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
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer() {
    return combineReducers({
        route: routeReducer,
        app: appReducer,
    });
}
