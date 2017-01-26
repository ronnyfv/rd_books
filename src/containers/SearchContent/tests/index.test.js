import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { SearchContainer, mapDispatchToProps } from '../index';
import { chageActivePageAction } from '../../shared/actions';
import configureStore from '../../../store';

describe('<SearchContainer />', () => {
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
                <SearchContainer {...props} />
            </Provider>
        );
        expect(renderedComponent.contains(<h3 className="text-uppercase">Resultados do Google Books</h3>)).toEqual(true);
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
                const pageText = 'search';

                result.handlePageChange({
                    selected: page,
                });

                expect(dispatch).toHaveBeenCalledWith(chageActivePageAction(pageText, page));
            });
        });
    });
});
