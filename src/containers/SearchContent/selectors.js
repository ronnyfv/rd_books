import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

/**
 *  SEARCH SELECTORS
 */

const selectAppSearchError = () => createSelector(
    selectApp,
    (appState) => appState.search.error,
);

const selectAppSearchIsFinished = () => createSelector(
    selectApp,
    (appState) => appState.search.isFinished,
);

const selectAppSearchIsLoading = () => createSelector(
    selectApp,
    (appState) => appState.search.isLoading,
);

const selectAppSearchQuery = () => createSelector(
    selectApp,
    (appState) => appState.search.query,
);

const selectAppSearchQueryResult = () => createSelector(
    selectApp,
    (appState) => appState.search.queryResult,
);

const selectAppBookToAdd = () => createSelector(
    selectApp,
    (appState) => appState.bookToAdd,
);

export {
    selectApp,
    selectAppSearchError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,
    selectAppBookToAdd,
};
