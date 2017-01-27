import {
    CHANGE_SEARCH_ACTIVE_PAGE,
    REQUEST_SEARCH_LOAD,
    SET_SEARCH_STATUS_LOADING,
    SET_SEARCH_STATUS_ERROR,
    SET_SEARCH_STATUS_SUCCESS,
    ADD_NEW_BOOK_FAVORITE,
    REMOVE_NEW_BOOK_FAVORITE,
} from './constants';

export function changeSearchActivePageAction(activePage) {
    return {
        type: CHANGE_SEARCH_ACTIVE_PAGE,
        activePage,
    };
}

export function setSearchStatusLoadingAction() {
    return {
        type: SET_SEARCH_STATUS_LOADING,
    };
}
export function setSearchStatusSuccessAction(items, totalItems) {
    return {
        type: SET_SEARCH_STATUS_SUCCESS,
        items,
        totalItems,
    };
}

export function setSearchStatusErrorAction(error) {
    return {
        type: SET_SEARCH_STATUS_ERROR,
        target: 'search',
        error,
    };
}

export function requestSearchLoadAction(queryString) {
    return {
        type: REQUEST_SEARCH_LOAD,
        queryString,
    };
}

export function addNewBookFavoriteAction(book) {
    return {
        type: ADD_NEW_BOOK_FAVORITE,
        book,
    };
}

export function removeNewBookFavoriteAction(book) {
    return {
        type: REMOVE_NEW_BOOK_FAVORITE,
        book,
    };
}
