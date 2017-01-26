import _ from 'lodash';

import {
    TOGGLE_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    CHANGE_ACTIVE_PAGE,
} from './constants';

/* eslint-disable quote-props, comma-dangle */

// Estado inicial da aplicação
const initialState = {
    loading: false,
    error: false,
    ui: {
        showSidebar: false,
    },
    search: {
        isError: false,
        isFinished: false,
        isLoading: false,
        query: {
            activePage: 0,
            resultCount: 15,
            total: 30,
            skip: 30,
            orderBy: 'title',
        },
        queryResult: undefined,
    },
    favorite: {
        isError: false,
        isFinished: false,
        isLoading: false,
        query: {
            activePage: 0,
            resultCount: 15,
            total: 30,
            skip: 30,
            orderBy: 'title',
        },
        queryResult: undefined,
    },
    book: {
        isError: false,
        isFinished: false,
        isLoading: false,
    },
};

function appReducer(state = initialState, action) {
    switch (action.type) {

        case HIDE_SIDEBAR:
            return _.merge({}, state, {
                ui: {
                    showSidebar: false,
                },
            });

        case SHOW_SIDEBAR:
            return _.merge({}, state, {
                ui: {
                    showSidebar: true,
                },
            });

        case TOGGLE_SIDEBAR:
            return _.merge({}, state, {
                ui: {
                    showSidebar: !state.ui.showSidebar,
                },
            });

        case CHANGE_ACTIVE_PAGE:
            return _.merge({}, state, {
                [action.target]: {
                    query: {
                        activePage: action.activePage,
                    }
                }
            });

        default:
            return state;
    }
}

export default appReducer;
