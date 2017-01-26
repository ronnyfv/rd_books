import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
    CHANGE_ACTIVE_PAGE
} from '../constants';

import {
    toggleSidebarAction,
    hideSidebarAction,
    showSidebarAction,
    chageActivePageAction,
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

    describe('chageActivePageAction', () => {
        it('deve retornar o type referente a action', () => {
            const page = 1;
            const pageText = 'search';

            const expectedResult = {
                type: CHANGE_ACTIVE_PAGE,
                target: pageText,
                activePage: page,
            };

            expect(chageActivePageAction(pageText, page)).toEqual(expectedResult);
        });
    });
});
