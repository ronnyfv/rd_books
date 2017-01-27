import { createSelector } from 'reselect';
import _ from 'lodash';

const selectApp = (state) => state.app;

const selectAppShowSidebar = () => createSelector(
    selectApp,
    (appState) => appState.ui.showSidebar
);

const selectLocationState = () => {
    let prevRoutingState;

    return (state) => {
        const routingState = state.route;

        if (!_.isEqual(routingState, prevRoutingState)) {
            prevRoutingState = routingState;
        }

        return prevRoutingState;
    };
};


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
    // APP SELECTORS
    selectApp,
    selectLocationState,
    selectAppShowSidebar,

    // SEARCH SELECTORS
    selectAppSearchError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,

    // FAVORITE SELECTORS
    selectAppFavoriteError,
    selectAppFavoriteIsFinished,
    selectAppFavoriteIsLoading,
    selectAppFavoriteQuery,
    selectAppFavoriteQueryResult,

    // BOOK SELECTORS
    selectAppBookError,
    selectAppBookIsFinished,
    selectAppBookIsLoading,
    selectAppBookId,
    selectAppBookData,
};
