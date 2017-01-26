/**
 * Ver http://redux.js.org/docs/advanced/Middleware.html
 *
 *  Logger de requisições via console.
 *  Para cada dispatch feito, é criado um group collapse que agrupa todos os eventos/consoles/errors/dispatches que forem gerados.
 */

export const devLogger = (store) => (next) => (action) => {
    /* eslint-disable no-console */
    console.groupCollapsed(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    /* eslint-enable */
    return result;
};
