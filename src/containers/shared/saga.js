import { takeLatest, put, select, fork, call } from 'redux-saga/effects';
import _ from 'lodash';

import request from '../../helpers/request';
import formatBookListVolume from '../../helpers/book';

import {
    REQUEST_LOAD_SEARCH,
    REQUEST_LOAD_FAVORITE,
    CHANGE_ACTIVE_PAGE_SEARCH,
    CHANGE_ACTIVE_PAGE_FAVORITE,
    REQUEST_LOAD_BOOK,
} from './constants';

import {
    setStatusLoadingSearchAction,
    setStatusLoadingFavoriteAction,
    setStatusSuccessSearchAction,
    setStatusFailSearchAction,
    setStatusLoadingBookAction,
    setStatusSuccessBookAction,
    setStatusFailBookAction,
} from './actions';

import {
    selectAppSearchQuery,
    selectAppBookId,
} from './selectors';

function* loadBooksSearch() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setStatusLoadingSearchAction());

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
        yield put(setStatusSuccessSearchAction(formatBookListVolume(result.items), result.totalItems));
    } catch (err) {
        const error = {
            title: 'Erro desconhecido',
            mensagem: 'Ocorreu um erro ao tentar obter a lista de livros',
        };
        yield put(setStatusFailSearchAction(error));
    }
}

function* loadBooksFavorites() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setStatusLoadingFavoriteAction());
}

function* loadBook() {
    // muda o status do loading: loading = true, finished: false, error: false
    yield put(setStatusLoadingBookAction());

    // usando reselect, obtem atributo 'id' referente a url acessada
    const id = yield select(selectAppBookId());

    // concatena o id para formar uma url válida pela api do google
    // EX: https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C
    const requestURL = `https://www.googleapis.com/books/v1/volumes/${id}`;

    try {
        // yield call realiza a chamada para APi usando 'request' e espera o retorno do resultado
        const result = yield call(request, requestURL);

        // caso chamada tenha retornado e sem erro, usa o 'put' para salvar na store os dados recebidos
        yield put(setStatusSuccessBookAction(result));
    } catch (err) {
        const error = {
            title: 'Erro desconhecido',
            mensagem: 'Ocorreu um erro ao tentar obter o livro desejado',
        };
        yield put(setStatusFailBookAction(error));
    }
}

export function* iniciaWatcher() {
    // escuta por requests feitas para a página de procura
    yield fork(takeLatest, REQUEST_LOAD_SEARCH, loadBooksSearch);
    yield fork(takeLatest, CHANGE_ACTIVE_PAGE_SEARCH, loadBooksSearch);

    // escuta por requests feitas para a página de favoritos
    yield fork(takeLatest, REQUEST_LOAD_FAVORITE, loadBooksFavorites);
    yield fork(takeLatest, CHANGE_ACTIVE_PAGE_FAVORITE, loadBooksFavorites);

    // escuta por requests feitas para a página do conteúdo do livro
    yield fork(takeLatest, REQUEST_LOAD_BOOK, loadBook);
}

export function* sharedSaga() {
    yield fork(iniciaWatcher);
}

export default sharedSaga;
