import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import configureStore from '../../../store';
import { AppContainer, mapDispatchToProps } from '../index';

import { toggleSidebarAction } from '../../shared/actions';

describe('<AppContainer />', () => {
    let store;

    const handleMobileButton = () => {

    };

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar os filhos', () => {
        const children = (<h1>AppContainer</h1>);
        const renderedComponent = mount(
            <Provider store={store}>
                <AppContainer showSidebar={false} handleMobileButton={handleMobileButton}>
                    {children}
                </AppContainer>
            </Provider>
        );

        expect(renderedComponent.contains(children)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        it('deve conter handleMobileButton', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);

            expect(result.handleMobileButton).toBeDefined();
        });

        it('should invocar toggleSidebarAction quando chamado', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);

            result.handleMobileButton();

            expect(dispatch).toHaveBeenCalledWith(toggleSidebarAction());
        });
    });
});
