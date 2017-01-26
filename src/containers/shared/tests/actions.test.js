import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    TOGGLE_SIDEBAR,
} from '../constants';

import {
    toggleSidebarAction,
    hideSidebarAction,
    showSidebarAction,
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
});
