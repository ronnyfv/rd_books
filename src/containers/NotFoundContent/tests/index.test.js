import React from 'react';
import { shallow } from 'enzyme';

import NotFoundContent from '../index';

describe('<NotFoundContent />', () => {
    it('deve renderizar o texto de não encontrado', () => {
        const renderedComponent = shallow(
            <NotFoundContent />
        );
        expect(renderedComponent.contains(<h2>Erro 404</h2>)).toEqual(true);
    });
});
