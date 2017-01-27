import {
    REQUEST_BOOK_LOAD,
    SET_BOOK_STATUS_ERROR,
    SET_BOOK_STATUS_LOADING,
    SET_BOOK_STATUS_SUCCESS,
} from '../constants';

import {
    requestBookLoadAction,
    setBookStatusErrorAction,
    setBookStatusLoadingAction,
    setBookStatusSuccessAction,
} from '../actions';

describe('Actions', () => {
    describe('requestBookLoadAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: REQUEST_BOOK_LOAD,
            };

            expect(requestBookLoadAction()).toEqual(expectedResult);
        });
    });

    describe('setBookStatusErrorAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: SET_BOOK_STATUS_ERROR,
            };

            expect(setBookStatusErrorAction()).toEqual(expectedResult);
        });
    });

    describe('setBookStatusLoadingAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: SET_BOOK_STATUS_LOADING,
            };

            expect(setBookStatusLoadingAction()).toEqual(expectedResult);
        });
    });

    describe('setBookStatusSuccessAction', () => {
        it('deve retornar o type referente a action', () => {
            const expectedResult = {
                type: SET_BOOK_STATUS_SUCCESS,
            };

            expect(setBookStatusSuccessAction()).toEqual(expectedResult);
        });
    });
});
