import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

/**
 *  FAVORITE SELECTORS
 */

const selectAppFavoriteError = () => createSelector(
    selectApp,
    (appState) => appState.favorite.error,
);

const selectAppFavoriteIsFinished = () => createSelector(
    selectApp,
    (appState) => appState.favorite.isFinished,
);

const selectAppFavoriteIsLoading = () => createSelector(
    selectApp,
    (appState) => appState.favorite.isLoading,
);

const selectAppFavoriteQuery = () => createSelector(
    selectApp,
    (appState) => appState.favorite.query,
);

const selectAppFavoriteQueryResult = () => createSelector(
    selectApp,
    (appState) => appState.favorite.queryResult,
);


export {
    selectApp,
    selectAppFavoriteError,
    selectAppFavoriteIsFinished,
    selectAppFavoriteIsLoading,
    selectAppFavoriteQuery,
    selectAppFavoriteQueryResult,
};
