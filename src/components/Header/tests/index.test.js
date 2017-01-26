import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
    const props = {
        handleMobileButton: () => ({}),
        showSidebar: true,
    };

    it('deve renderizar o texto da logo', () => {
        const renderedComponent = shallow(
            <Header {...props} />
        );
        expect(renderedComponent.contains(<h1>RD Books</h1>)).toEqual(true);
    });
});
