import _ from 'lodash';

import {
    // gerais
    TOGGLE_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,

    // procura
    CHANGE_ACTIVE_PAGE_SEARCH,
    CHANGE_ACTIVE_PAGE_FAVORITE,
    SET_STATUS_SEARCH_LOADING,
    SET_STATUS_SEARCH_SUCCESS,
    SET_STATUS_SEARCH_ERROR,

    // livro
    REQUEST_LOAD_BOOK,
    SET_STATUS_BOOK_SUCCESS,
    SET_STATUS_BOOK_ERROR,
} from './constants';

/* eslint-disable quote-props, comma-dangle */

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

        case CHANGE_ACTIVE_PAGE_SEARCH:
            return _.merge({}, state, {
                search: {
                    query: {
                        activePage: action.activePage,
                    }
                }
            });

        case CHANGE_ACTIVE_PAGE_FAVORITE:
            return _.merge({}, state, {
                favorite: {
                    query: {
                        activePage: action.activePage,
                    }
                }
            });

        case SET_STATUS_SEARCH_LOADING:
            return _.merge({}, state, {
                [action.target]: {
                    error: undefined,
                    isFinished: false,
                    isLoading: true,
                }
            });

        case SET_STATUS_SEARCH_SUCCESS:
            return _.merge({}, state, {
                [action.target]: {
                    error: undefined,
                    isFinished: true,
                    isLoading: false,
                    query: {
                        total: action.totalItems,
                    },
                    queryResult: action.items
                }
            });

        case SET_STATUS_SEARCH_ERROR:
            return _.merge({}, state, {
                [action.target]: {
                    error: action.error,
                    isFinished: true,
                    isLoading: false,
                }
            });

        case REQUEST_LOAD_BOOK:
            return _.merge({}, state, {
                book: {
                    id: action.bookId,
                }
            });

        case SET_STATUS_BOOK_SUCCESS:
            return _.merge({}, state, {
                book: {
                    error: undefined,
                    isFinished: true,
                    isLoading: false,
                    data: action.data,
                }
            });

        case SET_STATUS_BOOK_ERROR:
            return _.merge({}, state, {
                book: {
                    error: action.error,
                    isFinished: true,
                    isLoading: false,
                    data: undefined,
                }
            });

        default:
            return state;
    }
}

export default appReducer;
