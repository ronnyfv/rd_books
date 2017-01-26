import {
    selectApp,
    selectAppLoading,
    selectAppShowSidebar,
    selectLocationState,
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

describe('selectAppShowSidebar', () => {
    const selectAppShowSidebarSelector = selectAppShowSidebar();

    it('deve retornar variavel showSidebar', () => {
        const showSidebar = true;

        const mockedState = {
            app: {
                ui: {
                    showSidebar,
                },
            },
        };

        expect(selectAppShowSidebarSelector(mockedState)).toEqual(showSidebar);
    });
});

describe('selectLocationState', () => {
    const locationStateSelector = selectLocationState();

    it('deve retornar a rota', () => {
        const route = {
            locationBeforeTransitions: null,
        };
        const mockedState = {
            route,
        };

        expect(locationStateSelector(mockedState)).toEqual(route);
    });
});
