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

const selectAppSearchIsError = () => createSelector(
    selectApp,
    (appState) => appState.search.isError,
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

const selectAppFavoriteIsError = () => createSelector(
    selectApp,
    (appState) => appState.favorite.isError,
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
    // APP SELECTORS
    selectApp,
    selectLocationState,
    selectAppShowSidebar,

    // SEARCH SELECTORS
    selectAppSearchIsError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,

    // FAVORITE SELECTORS
    selectAppFavoriteIsError,
    selectAppFavoriteIsFinished,
    selectAppFavoriteIsLoading,
    selectAppFavoriteQuery,
    selectAppFavoriteQueryResult,
};
