import {
    REQUEST_BOOK_LOAD,
    SET_BOOK_STATUS_ERROR,
    SET_BOOK_STATUS_LOADING,
    SET_BOOK_STATUS_SUCCESS,
} from './constants';

export function requestBookLoadAction(bookId) {
    return {
        type: REQUEST_BOOK_LOAD,
        bookId,
    };
}

export function setBookStatusLoadingAction() {
    return {
        type: SET_BOOK_STATUS_LOADING,
    };
}

export function setBookStatusSuccessAction(data) {
    return {
        type: SET_BOOK_STATUS_SUCCESS,
        data,
    };
}

export function setBookStatusErrorAction(error) {
    return {
        type: SET_BOOK_STATUS_ERROR,
        error,
    };
}
