import _ from 'lodash';

import {
    TOGGLE_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    LOAD_DATABASE,
} from './constants';


/**
 * FAVORITES
 */
import {
    SET_FAVORITE_STATUS_SUCCESS,
    SET_FAVORITE_STATUS_LOADING,
    SET_FAVORITE_STATUS_ERROR,
    CHANGE_FAVORITE_ACTIVE_PAGE,
} from '../FavoriteContent/constants';


/**
 * SEARCH IMPORTS
 */
import {
    CHANGE_SEARCH_ACTIVE_PAGE,
    SET_SEARCH_STATUS_LOADING,
    SET_SEARCH_STATUS_ERROR,
    SET_SEARCH_STATUS_SUCCESS,
    ADD_NEW_BOOK_FAVORITE,
    REMOVE_NEW_BOOK_FAVORITE,
    REQUEST_SEARCH_LOAD,
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
            queryString: undefined,
            activePage: 0,
            resultCount: 5,
            total: 0,
            orderBy: 'relevance',
        },
        queryResult: undefined,
    },
    database: {
        books: [],
        ids: [],
    },
    favorite: {
        bookToAdd: undefined,
        error: undefined,
        isFinished: false,
        isLoading: false,
        query: {
            activePage: 0,
            resultCount: 5,
            total: 0,
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

        case LOAD_DATABASE:
            return _.merge({}, state, {
                database: action.database,
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

        case REQUEST_SEARCH_LOAD:
            return _.merge({}, state, {
                search: {
                    query: {
                        queryString: action.queryString,
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

        case ADD_NEW_BOOK_FAVORITE:
            return _.merge({}, state, {
                bookToAdd: action.book,
            });

        case REMOVE_NEW_BOOK_FAVORITE:
            return _.merge({}, state, {
                bookToAdd: action.book,
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


        /**
         * FAVORITE
         */

        case CHANGE_FAVORITE_ACTIVE_PAGE:
            return _.merge({}, state, {
                favorite: {
                    query: {
                        activePage: action.activePage,
                    },
                },
            });

        case SET_FAVORITE_STATUS_LOADING:
            return _.merge({}, state, {
                favorite: {
                    error: undefined,
                    isFinished: false,
                    isLoading: true,
                },
            });

        case SET_FAVORITE_STATUS_SUCCESS:
            return _.merge({}, state, {
                favorite: {
                    error: undefined,
                    isFinished: true,
                    isLoading: false,
                    query: {
                        total: action.totalItems,
                    },
                    queryResult: action.items,
                },
            });

        case SET_FAVORITE_STATUS_ERROR:
            return _.merge({}, state, {
                favorite: {
                    error: action.error,
                    isFinished: true,
                    isLoading: false,
                },
            });


        default:
            return state;
    }
}

export default appReducer;
