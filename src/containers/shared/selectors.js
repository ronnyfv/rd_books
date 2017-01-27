import { createSelector } from 'reselect';
import _ from 'lodash';

const selectApp = (state) => state.app;

const selectAppShowSidebar = () => createSelector(
    selectApp,
    (appState) => appState.ui.showSidebar
);

const selectAppDatabase = () => createSelector(
    selectApp,
    (appState) => appState.database,
);

const selectAppDatabaseIds = () => createSelector(
    selectApp,
    (appState) => appState.database.ids,
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


export {
    selectApp,
    selectLocationState,
    selectAppShowSidebar,
    selectAppDatabase,
    selectAppDatabaseIds,
};
