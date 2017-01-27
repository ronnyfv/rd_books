import React from 'react';
import { IndexRoute, Route } from 'react-router';

// containers imports
import AppContainer from './containers/App';
import NotFoundContent from './containers/NotFoundContent';
import SearchContainer from './containers/SearchContent';
import FavoriteContainer from './containers/FavoriteContent';
import BookContainer from './containers/BookContainer';

export function routes() {
    return (
        <Route path="/" component={AppContainer}>
            <IndexRoute component={SearchContainer} />

            <Route path="/procura" component={SearchContainer} />
            <Route path="/favoritos" component={FavoriteContainer} />

            <Route path="/livro/:id" component={BookContainer} />

            <Route path="*" component={NotFoundContent}>
            </Route>
        </Route>
    );
}
