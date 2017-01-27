import _ from 'lodash';

import {
    TOGGLE_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
} from './constants';

/**
 * FAVORITES
 */
import {} from '../FavoriteContent/constants';

/**
 * SEARCH IMPORTS
 */
import {
    CHANGE_SEARCH_ACTIVE_PAGE,
    SET_SEARCH_STATUS_LOADING,
    SET_SEARCH_STATUS_ERROR,
    SET_SEARCH_STATUS_SUCCESS,
} from '../SearchContent/constants';

/**
 * BOOK IMPORTS
 */
import {
    SET_BOOK_STATUS_SUCCESS,
    SET_BOOK_STATUS_LOADING,
    SET_BOOK_STATUS_ERROR,
    REQUEST_BOOK_LOAD,
} from '../BookContainer/constants';


// Estado inicial da aplicação
const initialState = {
    loading: false,
    ui: {
        showSidebar: false,
    },
    search: {
        error: undefined,
        isFinished: false,
        isLoading: false,
        query: {
            queryString: 'javascript',
            activePage: 0,
            resultCount: 5,
            total: 0,
            orderBy: 'relevance',
        },
        queryResult: undefined,
    },
    favorite: {
        error: undefined,
        isFinished: false,
        isLoading: false,
        query: {
            queryString: 'javascript',
            activePage: 0,
            resultCount: 5,
            total: 0,
            orderBy: 'relevance',
        },
        queryResult: undefined,
    },
    book: {
        error: undefined,
        isFinished: false,
        isLoading: false,
        id: undefined,
        data: undefined,
    },
};


function appReducer(state = initialState, action) {
    switch (action.type) {

        /**
         * comuns
         */
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

        /**
         * SEARCH
         */
        case CHANGE_SEARCH_ACTIVE_PAGE:
            return _.merge({}, state, {
                search: {
                    query: {
                        activePage: action.activePage,
                    },
                },
            });

        case SET_SEARCH_STATUS_LOADING:
            return _.merge({}, state, {
                search: {
                    error: undefined,
                    isFinished: false,
                    isLoading: true,
                },
            });

        case SET_SEARCH_STATUS_SUCCESS:
            return _.merge({}, state, {
                search: {
                    error: undefined,
                    isFinished: true,
                    isLoading: false,
                    query: {
                        total: action.totalItems,
                    },
                    queryResult: action.items,
                },
            });

        case SET_SEARCH_STATUS_ERROR:
            return _.merge({}, state, {
                search: {
                    error: action.error,
                    isFinished: true,
                    isLoading: false,
                },
            });

        /**
         * BOOK
         */
        case REQUEST_BOOK_LOAD:
            return _.merge({}, state, {
                book: {
                    id: action.bookId,
                },
            });

        case SET_BOOK_STATUS_SUCCESS:
            return _.merge({}, state, {
                book: {
                    error: undefined,
                    isFinished: true,
                    isLoading: false,
                    data: action.data,
                },
            });

        case SET_BOOK_STATUS_ERROR:
            return _.merge({}, state, {
                book: {
                    error: action.error,
                    isFinished: true,
                    isLoading: false,
                    data: undefined,
                },
            });

        case SET_BOOK_STATUS_LOADING:
            return _.merge({}, state, {
                book: {
                    error: undefined,
                    isFinished: false,
                    isLoading: true,
                    data: undefined,
                },
            });

        default:
            return state;
    }
}

export default appReducer;
