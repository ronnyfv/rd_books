import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
    CHANGE_ACTIVE_PAGE_SEARCH,
    CHANGE_ACTIVE_PAGE_FAVORITE,
    REQUEST_LOAD_SEARCH,
    REQUEST_LOAD_FAVORITE,
    SET_STATUS_SEARCH_LOADING,
    SET_STATUS_SEARCH_ERROR,
    SET_STATUS_SEARCH_SUCCESS,
} from './constants';

const Modulos = {
    SEARCH: 'search',
    FAVORITE: 'favorite',
};

export function hideSidebarAction() {
    return {
        type: HIDE_SIDEBAR,
    };
}

export function showSidebarAction() {
    return {
        type: SHOW_SIDEBAR,
    };
}

export function toggleSidebarAction() {
    return {
        type: TOGGLE_SIDEBAR,
    };
}

/**
 * PROCURA
 */

export function changeActivePageSearchAction(activePage) {
    return {
        type: CHANGE_ACTIVE_PAGE_SEARCH,
        activePage,
    };
}

export function setStatusLoadingSearchAction() {
    return {
        type: SET_STATUS_SEARCH_LOADING,
        target: Modulos.SEARCH,
    };
}
export function setStatusSuccessSearchAction(items, totalItems) {
    return {
        type: SET_STATUS_SEARCH_SUCCESS,
        target: Modulos.SEARCH,
        items,
        totalItems,
    };
}

export function setStatusFailSearchAction(error) {
    return {
        type: SET_STATUS_SEARCH_ERROR,
        target: Modulos.SEARCH,
        error,
    };
}

export function requestLoadSearchAction() {
    return {
        type: REQUEST_LOAD_SEARCH,
    };
}

/**
 *  FAVORITOS
 */

export function changeActivePageFavoriteAction(activePage) {
    return {
        type: CHANGE_ACTIVE_PAGE_FAVORITE,
        activePage,
    };
}

export function setStatusLoadingFavoriteAction() {
    return {
        type: SET_STATUS_SEARCH_LOADING,
        target: Modulos.FAVORITE,
    };
}

export function setStatusSuccessFavoriteAction(items, totalItems) {
    return {
        type: SET_STATUS_SEARCH_LOADING,
        target: Modulos.FAVORITE,
        items,
        totalItems,
    };
}

export function setStatusFailFavoriteAction(error) {
    return {
        type: SET_STATUS_SEARCH_LOADING,
        target: Modulos.FAVORITE,
        error,
    };
}

export function requestLoadFavoriteAction() {
    return {
        type: REQUEST_LOAD_FAVORITE,
    };
}
