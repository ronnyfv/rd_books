import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
    SAVE_DATABASE,
    INIT_DATABASE,
    LOAD_DATABASE,
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

export function initDatabaseAction() {
    return {
        type: INIT_DATABASE,
    };
}

export function saveDatabaseAction() {
    return {
        type: SAVE_DATABASE,
    };
}

export function loadDatabaseAction(database) {
    return {
        type: LOAD_DATABASE,
        database,
    };
}
