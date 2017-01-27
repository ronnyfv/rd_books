import {
    selectApp,
} from '../selectors';

describe('selectApp', () => {
    it('deve obter o estado principal', () => {
        const globalState = {};
        const mockedState = {
            app: globalState,
        };

        expect(selectApp(mockedState)).toEqual(globalState);
    });
});
