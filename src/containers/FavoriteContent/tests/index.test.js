import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { FavoriteContainer, mapDispatchToProps } from '../index';
import configureStore from '../../../store';

describe('<FavoriteContainer />', () => {
    let store;

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar o header do conteúdo', () => {
        const renderedComponent = mount(
            <Provider store={store}>
                <FavoriteContainer />
            </Provider>
        );
        expect(renderedComponent.contains(<h2>FavoriteContainer</h2>)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        it('deve conter um dispatch', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.dispatch).toBeDefined();
        });
    });
});
