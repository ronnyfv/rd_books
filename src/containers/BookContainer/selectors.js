import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

/**
 * BOOK SELECTORS
 */

const selectAppBookError = () => createSelector(
    selectApp,
    (appState) => appState.book.error,
);

const selectAppBookIsFinished = () => createSelector(
    selectApp,
    (appState) => appState.book.isFinished,
);

const selectAppBookIsLoading = () => createSelector(
    selectApp,
    (appState) => appState.book.isLoading,
);

const selectAppBookId = () => createSelector(
    selectApp,
    (appState) => appState.book.id,
);

const selectAppBookData = () => createSelector(
    selectApp,
    (appState) => appState.book.data,
);

export {
    selectApp,
    selectAppBookError,
    selectAppBookIsFinished,
    selectAppBookIsLoading,
    selectAppBookId,
    selectAppBookData,
};
