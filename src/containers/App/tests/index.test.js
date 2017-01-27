import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import configureStore from '../../../store';
import { toggleSidebarAction, initDatabaseAction } from '../../shared/actions';

import { AppContainer, mapDispatchToProps } from '../index';
import Sidebar from '../../../components/Sidebar';

describe('<AppContainer />', () => {
    let store;

    const props = {
        showSidebar: false,
        handleMobileButton: () => {
        },
        handleInitDatabase: () => {
        },
        location: {
            pathname: '',
        },
        loadBooks: () => {
        },
        showForm: true,
        handleAddFavorite: () => {
        },
    };

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar os filhos', () => {
        const children = (<h1>AppContainer</h1>);
        const renderedComponent = mount(
            <Provider store={store}>
                <AppContainer {...props}>
                    {children}
                </AppContainer>
            </Provider>
        );

        expect(renderedComponent.contains(children)).toEqual(true);
    });



    describe('mapDispatchToProps', () => {
        describe('handleMobileButton', () => {
            it('deve conter handleMobileButton', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.handleMobileButton).toBeDefined();
            });

            it('deve invocar toggleSidebarAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                result.handleMobileButton();

                expect(dispatch).toHaveBeenCalledWith(toggleSidebarAction());
            });
        });

        describe('handleInitDatabase', () => {
            it('deve conter handleInitDatabase', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.handleInitDatabase).toBeDefined();
            });

            it('deve invocar initDatabaseAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                result.handleInitDatabase();

                expect(dispatch).toHaveBeenCalledWith(initDatabaseAction());
            });
        });

        describe('loadBooks', () => {
            it('deve conter loadBooks', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.loadBooks).toBeDefined();
            });
        });
    });
});
