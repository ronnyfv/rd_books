import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { FavoriteContainer, mapDispatchToProps } from '../index';
import { chageActivePageAction } from '../../shared/actions';
import configureStore from '../../../store';

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
        expect(renderedComponent.contains(<h3 className="text-uppercase">Resultados dos seus favoritos</h3>)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        describe('handlePageChange', () => {
            it('deve conter handlePageChange', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.handlePageChange).toBeDefined();
            });

            it('deve invocar chageActivePageAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);
                const page = 1;
                const pageText = 'favorite';

                result.handlePageChange({
                    selected: page,
                });

                expect(dispatch).toHaveBeenCalledWith(chageActivePageAction(pageText, page));
            });
        });
    });
});
