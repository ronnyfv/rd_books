import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { FavoriteContainer, mapDispatchToProps } from '../index';
import configureStore from '../../../store';

import { changeFavoriteActivePageAction, requestFavoriteLoadAction } from '../actions';

describe('<FavoriteContainer />', () => {
    let store;

    const props = {
        isError: false,
        isFinished: true,
        isLoading: false,
        query: {},
        queryResult: [],
        handlePageChange: () => {
        },
        loadFavoriteBooks: () => {
        },
    };

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar o header do conteúdo', () => {
        const renderedComponent = mount(
            <Provider store={store}>
                <FavoriteContainer {...props} />
            </Provider>
        );
        expect(renderedComponent.contains(<h3 className="text-uppercase">Meus favoritos</h3>)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        describe('handlePageChange', () => {
            it('deve conter handlePageChange', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.handlePageChange).toBeDefined();
            });

            it('deve invocar changeFavoriteActivePageAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);
                const page = 1;

                result.handlePageChange({
                    selected: page,
                });

                expect(dispatch).toHaveBeenCalledWith(changeFavoriteActivePageAction(page));
            });
        });

        describe('loadFavoriteBooks', () => {
            it('deve conter loadFavoriteBooks', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.loadFavoriteBooks).toBeDefined();
            });

            it('deve invocar requestFavoriteLoadAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                result.loadFavoriteBooks();

                expect(dispatch).toHaveBeenCalledWith(requestFavoriteLoadAction());
            });
        });
    });
});
