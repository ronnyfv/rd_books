import React from 'react';
import { shallow } from 'enzyme';

import List from '../index';

describe('<List />', () => {
    let props;

    beforeEach(() => {
        props = {
            Item: () => (<div></div>),
            queryResult: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ],
            query: {},
            handlePageChange: () => {
            },
            customMessage: <h1>Mensagem Teste</h1>,
            isFinished: false,
            isLoading: false,
            error: undefined,
        };
    });

    it('deve renderizar a mensagem recebida caso isLoading verdadeiro', () => {
        props.isLoading = true;

        const renderedComponent = shallow(
            <List {...props} />
        );
        expect(renderedComponent.contains(<h1>Mensagem Teste</h1>)).toEqual(true);
    });

    it('deve renderizar a mensagem recebida caso isFinished e erro', () => {
        props.isFinished = true;
        props.error = {
            msg: 'teste',
        };

        const renderedComponent = shallow(
            <List {...props} />
        );
        expect(renderedComponent.contains(<h1>Mensagem Teste</h1>)).toEqual(true);
    });

    it('não deve renderizar a mensagem recebida caso isFinished e erro', () => {
        props.isFinished = true;
        props.error = undefined;

        const renderedComponent = shallow(
            <List {...props} />
        );
        expect(renderedComponent.contains(<h1>Mensagem Teste</h1>)).toEqual(false);
    });
});
