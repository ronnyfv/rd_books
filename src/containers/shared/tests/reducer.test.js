import appReducer from '../reducer';

import {
    showSidebarAction,
    hideSidebarAction,
    toggleSidebarAction,
} from '../actions';

describe('appReducer', () => {
    let state;

    beforeEach(() => {
        state = {
            loading: false,
            error: false,
            ui: {
                showSidebar: false,
            },
        };
    });

    it('deve retornar o estado inicial', () => {
        const expectedResult = state;
        expect(appReducer(undefined, {})).toEqual(expectedResult);
    });

    it('deve receber e tratar a action showSidebarAction', () => {
        const stateAfter = Object.assign({}, state, {
            ui: {
                showSidebar: true,
            },
        });

        expect(appReducer(state, showSidebarAction())).toEqual(stateAfter);
    });

    it('deve receber e tratar a action hideSidebarAction', () => {
        const stateAfter = Object.assign({}, state, {
            ui: {
                showSidebar: false,
            },
        });

        expect(appReducer(state, hideSidebarAction())).toEqual(stateAfter);
    });

    it('deve receber e tratar a action toggleSidebarAction', () => {
        const stateAfter = Object.assign({}, state, {
            ui: {
                showSidebar: true,
            },
        });

        expect(appReducer(state, toggleSidebarAction())).toEqual(stateAfter);
    });
});