import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { SearchContainer, mapDispatchToProps } from '../index';
import configureStore from '../../../store';

import Sidebar from '../../../components/Sidebar';

describe('<SearchContainer />', () => {
    let store;

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    it('deve renderizar a sidebar', () => {
        const renderedComponent = mount(
            <Provider store={store}>
                <SearchContainer showSidebar={false} />
            </Provider>
        );
        expect(renderedComponent.contains(<Sidebar showSidebar={false} />)).toEqual(true);
    });

    describe('mapDispatchToProps', () => {
        it('deve conter um dispatch', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.dispatch).toBeDefined();
        });
    });
});
