import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
    CHANGE_ACTIVE_PAGE,
} from './constants';

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

export function chageActivePageAction(target, activePage) {
    return {
        type: CHANGE_ACTIVE_PAGE,
        target,
        activePage,
    };
}
