import _ from 'lodash';

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
            ui: {
                showSidebar: false,
            },
            search: {
                error: undefined,
                isFinished: false,
                isLoading: false,
                query: {
                    queryString: undefined,
                    activePage: 0,
                    resultCount: 5,
                    total: 0,
                    orderBy: 'relevance',
                },
                queryResult: undefined,
            },
            database: {
                books: [],
                ids: [],
            },
            favorite: {
                bookToAdd: undefined,
                error: undefined,
                isFinished: false,
                isLoading: false,
                query: {
                    activePage: 0,
                    resultCount: 5,
                    total: 0,
                },
                queryResult: undefined,
            },
            book: {
                error: undefined,
                isFinished: false,
                isLoading: false,
                id: undefined,
                data: undefined,
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
});
