import { HIDE_SIDEBAR, SHOW_SIDEBAR, TOGGLE_SIDEBAR } from './constants';

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
