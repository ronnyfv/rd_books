import {
    CHANGE_FAVORITE_ACTIVE_PAGE,
    REQUEST_FAVORITE_LOAD,
    SET_FAVORITE_STATUS_ERROR,
    SET_FAVORITE_STATUS_LOADING,
    SET_FAVORITE_STATUS_SUCCESS,
} from './constants';

export function changeFavoriteActivePageAction(activePage) {
    return {
        type: CHANGE_FAVORITE_ACTIVE_PAGE,
        activePage,
    };
}

export function setFavoriteStatusLoadingAction() {
    return {
        type: SET_FAVORITE_STATUS_LOADING,
    };
}
export function setFavoriteStatusSuccessAction(items, totalItems) {
    return {
        type: SET_FAVORITE_STATUS_SUCCESS,
        items,
        totalItems,
    };
}

export function setFavoriteStatusErrorAction(error) {
    return {
        type: SET_FAVORITE_STATUS_ERROR,
        error,
    };
}

export function requestFavoriteLoadAction() {
    return {
        type: REQUEST_FAVORITE_LOAD,
    };
}
