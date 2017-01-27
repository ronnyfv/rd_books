import _ from 'lodash';

import appReducer from '../reducer';

import {
    showSidebarAction,
    hideSidebarAction,
    toggleSidebarAction,
    changeActivePageFavoriteAction,
    changeActivePageSearchAction,
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
                    queryString: 'javascript',
                    activePage: 0,
                    resultCount: 5,
                    total: 0,
                    orderBy: 'relevance',
                },
                queryResult: undefined,
            },
            favorite: {
                error: undefined,
                isFinished: false,
                isLoading: false,
                query: {
                    queryString: 'javascript',
                    activePage: 0,
                    resultCount: 5,
                    total: 0,
                    orderBy: 'relevance',
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

    it('deve receber e tratar a action changeActivePageFavoriteAction', () => {
        const page = 1;

        const action = {
            activePage: page,
        };

        const stateAfter = _.merge({}, state, {
            favorite: {
                query: {
                    activePage: action.activePage,
                },
            },
        });

        expect(appReducer(state, changeActivePageFavoriteAction(page))).toEqual(stateAfter);
    });

    it('deve receber e tratar a action changeActivePageSearchAction', () => {
        const page = 1;

        const action = {
            activePage: page,
        };

        const stateAfter = _.merge({}, state, {
            search: {
                query: {
                    activePage: action.activePage,
                },
            },
        });

        expect(appReducer(state, changeActivePageSearchAction(page))).toEqual(stateAfter);
    });
});
