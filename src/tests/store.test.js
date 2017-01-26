import { browserHistory } from 'react-router';
import configureStore from '../store';

describe('configureStore', () => {
    let store;

    beforeAll(() => {
        store = configureStore({}, browserHistory);
    });

    describe('deve ter um estado', () => {
        it('valido', () => {
            expect(typeof store.getState()).toBe('object');
        });

        it('com um atributo app', () => {
            expect(typeof store.getState().app).toBe('object');
        });

        it('com um atributo route', () => {
            expect(typeof store.getState().route).toBe('object');
        });
    });
});
