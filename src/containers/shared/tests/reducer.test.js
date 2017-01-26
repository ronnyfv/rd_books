import _ from 'lodash';

import appReducer from '../reducer';

import {
    showSidebarAction,
    hideSidebarAction,
    toggleSidebarAction,
    chageActivePageAction
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
            search: {
                isError: false,
                isFinished: false,
                isLoading: false,
                query: {
                    activePage: 0,
                    resultCount: 15,
                    total: 30,
                    skip: 30,
                    orderBy: 'title',
                },
                queryResult: undefined,
            },
            favorite: {
                isError: false,
                isFinished: false,
                isLoading: false,
                query: {
                    activePage: 0,
                    resultCount: 15,
                    total: 30,
                    skip: 30,
                    orderBy: 'title',
                },
                queryResult: undefined,
            },
            book: {
                isError: false,
                isFinished: false,
                isLoading: false,
            },
        };
    });

    it('deve retornar o estado inicial', () => {
        expect(appReducer(undefined, {})).toEqual(state);
    });

    it('deve receber e tratar a action showSidebarAction', () => {
        const stateAfter = _.merge({}, state, {
            ui: {
                showSidebar: true,
            },
        });

        expect(appReducer(state, showSidebarAction())).toEqual(stateAfter);
    });

    it('deve receber e tratar a action hideSidebarAction', () => {
        const stateAfter = _.merge({}, state, {
            ui: {
                showSidebar: false,
            },
        });

        expect(appReducer(state, hideSidebarAction())).toEqual(stateAfter);
    });

    it('deve receber e tratar a action toggleSidebarAction', () => {
        const stateAfter = _.merge({}, state, {
            ui: {
                showSidebar: !state.ui.showSidebar,
            },
        });

        expect(appReducer(state, toggleSidebarAction())).toEqual(stateAfter);
    });

    it('deve receber e tratar a action chageActivePageAction', () => {
        const page = 1;
        const pageText = 'search';

        const action = {
            target: 'search',
            activePage: 1,
        };

        const stateAfter = _.merge({}, state, {
            [action.target]: {
                query: {
                    activePage: action.activePage,
                },
            },
        });

        expect(appReducer(state, chageActivePageAction(pageText, page))).toEqual(stateAfter);
    });
});
