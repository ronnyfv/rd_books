import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import configureStore from '../../../store';
import { AppContainer, mapDispatchToProps } from '../index';

describe('<AppContainer />', () => {
    let store;

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar os filhos', () => {
        const children = (<h1>AppContainer</h1>);
        const renderedComponent = mount(
            <Provider store={store}>
                <AppContainer>
                    {children}
                </AppContainer>
            </Provider>
        );
        expect(renderedComponent.contains(children)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        it('deve conter um dispatch', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.dispatch).toBeDefined();
        });
    });
});
