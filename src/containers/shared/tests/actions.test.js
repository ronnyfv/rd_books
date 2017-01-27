import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
    CHANGE_ACTIVE_PAGE_FAVORITE,
    CHANGE_ACTIVE_PAGE_SEARCH,
} from '../constants';

import {
    toggleSidebarAction,
    hideSidebarAction,
    showSidebarAction,
    changeActivePageFavoriteAction,
    changeActivePageSearchAction,
} from '../actions';

describe('Actions', () => {
    describe('toggleSidebarAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: TOGGLE_SIDEBAR,
            };

            expect(toggleSidebarAction()).toEqual(expectedResult);
        });
    });

    describe('hideSidebarAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: HIDE_SIDEBAR,
            };

            expect(hideSidebarAction()).toEqual(expectedResult);
        });
    });

    describe('showSidebarAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: SHOW_SIDEBAR,
            };

            expect(showSidebarAction()).toEqual(expectedResult);
        });
    });

    describe('changeActivePageFavoriteAction', () => {
        it('deve retornar o type referente a action', () => {
            const page = 1;

            const expectedResult = {
                type: CHANGE_ACTIVE_PAGE_FAVORITE,
                activePage: page,
            };

            expect(changeActivePageFavoriteAction(page)).toEqual(expectedResult);
        });
    });

    describe('changeActivePageSearchAction', () => {
        it('deve retornar o type referente a action', () => {
            const page = 1;

            const expectedResult = {
                type: CHANGE_ACTIVE_PAGE_SEARCH,
                activePage: page,
            };

            expect(changeActivePageSearchAction(page)).toEqual(expectedResult);
        });
    });
});
