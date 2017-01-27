import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { mount } from 'enzyme';

import { BookContainer, mapDispatchToProps } from '../index';
import configureStore from '../../../store';

import { requestBookLoadAction } from '../actions';

describe('<BookContainer />', () => {
    let store;
    let props;

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    beforeEach(() => {
        props = {
            error: undefined,
            isFinished: false,
            isLoading: false,
            data: undefined,
            loadBook: () => {
            },
        };
    });

    it('deve renderizar a mensagem recebida caso isLoading verdadeiro', () => {
        props.isLoading = true;

        const renderedComponent = mount(
            <Provider store={store}>
                <BookContainer {...props} />
            </Provider>
        );
        expect(renderedComponent.contains(<strong>Aguarde!</strong>)).toEqual(true);
    });

    it('deve renderizar a mensagem recebida caso isFinished e erro verdadeiros', () => {
        props.isFinished = true;
        props.error = {
            msg: 'teste',
        };

        const renderedComponent = mount(
            <Provider store={store}>
                <BookContainer {...props} />
            </Provider>
        );
        expect(renderedComponent.contains(<strong>Desculpe!</strong>)).toEqual(true);
    });

    it('não deve renderizar a mensagem recebida caso isFinished verdadeiro e erro nulo', () => {
        props.isFinished = true;
        props.error = undefined;
        props.data = {
            volumeInfo: {
                imageLinks: {
                    thumbnail: '',
                },
                authors: [],
            },
        };

        const renderedComponent = mount(
            <Provider store={store}>
                <BookContainer {...props} />
            </Provider>
        );
        expect(renderedComponent.contains(<h1>Mensagem Teste</h1>)).toEqual(false);
    });

    describe('mapDispatchToProps', () => {
        describe('loadBook', () => {
            it('deve conter loadBook', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);

                expect(result.loadBook).toBeDefined();
            });

            it('deve invocar requestBookLoadAction quando chamado', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);
                const id = 'teste';

                result.loadBook(id);

                expect(dispatch).toHaveBeenCalledWith(requestBookLoadAction(id));
            });
        });
    });
});
