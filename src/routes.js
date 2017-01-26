import React from 'react';
import { IndexRoute, Route } from 'react-router';

// containers imports
import AppContainer from './containers/App';
import NotFoundContent from './containers/NotFoundContent';
import SearchContainer from './containers/SearchContent';
import FavoriteContainer from './containers/FavoriteContent';

export function routes() {
    return (
        <Route path="/" component={AppContainer}>
            <IndexRoute component={SearchContainer} />

            <Route path="/procura" component={SearchContainer} />
            <Route path="/favoritos" component={FavoriteContainer} />

            <Route path="*" component={NotFoundContent}>
            </Route>
        </Route>
    );
}
