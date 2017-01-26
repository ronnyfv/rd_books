import { TOGGLE_SIDEBAR, SHOW_SIDEBAR, HIDE_SIDEBAR } from './constants';

// Estado inicial da aplicação
const initialState = {
    loading: false,
    error: false,
    ui: {
        showSidebar: false,
    },
};

function appReducer(state = initialState, action) {
    switch (action.type) {

        case HIDE_SIDEBAR:
            return Object.assign({}, state, {
                ui: {
                    showSidebar: false,
                },
            });

        case SHOW_SIDEBAR:
            return Object.assign({}, state, {
                ui: {
                    showSidebar: true,
                },
            });

        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                ui: {
                    showSidebar: !state.ui.showSidebar,
                },
            });

        default:
            return state;
    }
}

export default appReducer;
