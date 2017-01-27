import { takeLatest, put, select, fork, call } from 'redux-saga/effects';
import _ from 'lodash';

import request from '../../helpers/request';
import formatBookListVolume, { loadDatabaseLocalStorage, saveDatabaseLocalStorage } from '../../helpers/book';

/**
 *  BOOK IMPORTS
 */
import { REQUEST_BOOK_LOAD } from '../BookContainer/constants';
import { setBookStatusErrorAction, setBookStatusLoadingAction, setBookStatusSuccessAction } from '../BookContainer/actions';
import { selectAppBookId } from '../BookContainer/selectors';

/**
 * FAVORITE IMPORTS
 */
import {
    REQUEST_FAVORITE_LOAD,
    CHANGE_FAVORITE_ACTIVE_PAGE,
} from '../FavoriteContent/constants';
import { setFavoriteStatusLoadingAction, setFavoriteStatusSuccessAction, setFavoriteStatusErrorAction } from '../FavoriteContent/actions';

/**
 * SEARCH IMPORTS
 */
import {
    REQUEST_SEARCH_LOAD,
    CHANGE_SEARCH_ACTIVE_PAGE,
    ADD_NEW_BOOK_FAVORITE,
    REMOVE_NEW_BOOK_FAVORITE,
} from '../SearchContent/constants';
import { setSearchStatusLoadingAction, setSearchStatusErrorAction, setSearchStatusSuccessAction } from '../SearchContent/actions';
import { selectAppSearchQuery, selectAppBookToAdd } from '../SearchContent/selectors';


/**
 * APP
 */
import { INIT_DATABASE, SAVE_DATABASE } from './constants';
import { loadDatabaseAction } from './actions';
import { selectAppDatabase } from './selectors';

function* addNewBookFavorite() {
    const bookToAdd = yield select(selectAppBookToAdd());
    const database = loadDatabaseLocalStorage();

    if (_.findIndex(database.books, { id: bookToAdd.id }) < 0) {
        database.ids.push(bookToAdd.id);
        database.books.push(bookToAdd);

        saveDatabaseLocalStorage(database);
        yield put(loadDatabaseAction(database));
    }
}

function* removeNewBookFavorite() {
    const bookToAdd = yield select(selectAppBookToAdd());
    const database = loadDatabaseLocalStorage();

    if (_.findIndex(database.books, { id: bookToAdd.id }) >= 0) {
        database.ids = _.without(database.ids, bookToAdd.id);
        database.books = _.remove(database.books, {
            id: bookToAdd.id,
        });

        saveDatabaseLocalStorage(database);
        yield put(loadDatabaseAction(database));
    }
}

function* loadBooksSearch() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setSearchStatusLoadingAction());

    // usando reselect, obtem atributo 'query' referente ao objeto 'search' da store
    const query = yield select(selectAppSearchQuery());

    let requestURL = 'https://www.googleapis.com/books/v1/volumes?';
    const params = {
        q: query.queryString,
        orderBy: query.orderBy,
        maxResults: query.resultCount,
        startIndex: query.resultCount * query.activePage,
    };

    // concatena os atributos do objeto para formar uma url válida pela api do google
    // EX: https://www.googleapis.com/books/v1/volumes?q=java&orderBy=relevance&maxResults=15&startIndex=30
    requestURL += _.map(params, (v, k) => (`${encodeURIComponent(k)}=${encodeURIComponent(v)}`)).join('&');

    try {
        // yield call realiza a chamada para APi usando 'request' e espera o retorno do resultado
        const result = yield call(request, requestURL);

        // caso chamada tenha retornado e sem erro, usa o 'put' para salvar na store os dados recebidos
        yield put(setSearchStatusSuccessAction(formatBookListVolume(result.items), result.totalItems));
    } catch (err) {
        const error = {
            title: 'Erro desconhecido',
            mensagem: 'Ocorreu um erro ao tentar obter a lista de livros',
        };
        yield put(setSearchStatusErrorAction(error));
    }
}


function* loadBooksFavorites() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setFavoriteStatusLoadingAction());

    try {
        const database = yield select(selectAppDatabase());
        yield put(setFavoriteStatusSuccessAction(database.books, database.books.length));
    } catch (err) {
        const error = {
            title: 'Erro desconhecido',
            mensagem: 'Ocorreu um erro ao tentar obter a lista de livros',
        };
        yield put(setFavoriteStatusErrorAction(error));
    }
}


function* loadBook() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setBookStatusLoadingAction());

    // usando reselect, obtem atributo 'id' referente a url acessada
    const id = yield select(selectAppBookId());

    // concatena o id para formar uma url válida pela api do google
    // EX: https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C
    const requestURL = `https://www.googleapis.com/books/v1/volumes/${id}`;

    try {
        // yield call realiza a chamada para APi usando 'request' e espera o retorno do resultado
        const result = yield call(request, requestURL);

        // caso chamada tenha retornado e sem erro, usa o 'put' para salvar na store os dados recebidos
        yield put(setBookStatusSuccessAction(result));
    } catch (err) {
        const error = {
            title: 'Erro desconhecido',
            mensagem: 'Ocorreu um erro ao tentar obter o livro desejado',
        };
        yield put(setBookStatusErrorAction(error));
    }
}


function* initDatabase() {
    const database = loadDatabaseLocalStorage();
    yield put(loadDatabaseAction(database));
}

function* saveDatabase() {
    const database = yield select(selectAppDatabase());
    saveDatabaseLocalStorage(database);
}

/**
 * Saga fica constantemente escutando por qualquer chamada que usa as actions.
 * Caso encontre, ele chama o método especificado no terceiro parâmetro
 */
export function* iniciaWatcher() {
    yield fork(takeLatest, INIT_DATABASE, initDatabase);
    yield fork(takeLatest, SAVE_DATABASE, saveDatabase);

    // escuta por requests feitas para a página de procura
    yield fork(takeLatest, REQUEST_SEARCH_LOAD, loadBooksSearch);
    yield fork(takeLatest, CHANGE_SEARCH_ACTIVE_PAGE, loadBooksSearch);
    yield fork(takeLatest, ADD_NEW_BOOK_FAVORITE, addNewBookFavorite);
    yield fork(takeLatest, REMOVE_NEW_BOOK_FAVORITE, removeNewBookFavorite);

    // escuta por requests feitas para a página de favoritos
    yield fork(takeLatest, REQUEST_FAVORITE_LOAD, loadBooksFavorites);
    yield fork(takeLatest, CHANGE_FAVORITE_ACTIVE_PAGE, loadBooksFavorites);

    // escuta por requests feitas para a página do conteúdo do livro
    yield fork(takeLatest, REQUEST_BOOK_LOAD, loadBook);
}

export function* sharedSaga() {
    yield fork(iniciaWatcher);
}

export default sharedSaga;
