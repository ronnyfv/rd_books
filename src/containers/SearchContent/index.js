import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectAppSearchError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,
} from './selectors';

import {
    changeSearchActivePageAction,
    addNewBookFavoriteAction,
    removeNewBookFavoriteAction,
} from './actions';

import { selectAppDatabaseIds } from '../shared/selectors';


import List from '../../components/List';
import BookBox from '../../components/BookBox';

export class SearchContainer extends React.Component {
    render() {
        const { error, isFinished, isLoading, query, queryResult, handlePageChange, handleAddFavorite, databaseIds } = this.props;

        /**
         * O component List pode receber um elemento que será mostrando em caso de loading ou erro.
         * Código abaixo usa o variável para guardar um elemento de alerta que será enviado para o component List.
         * Em caso de sucesso, mensagem nula é enviada.
         */
        let customMessage = null;
        let showPaginator = true;

        // em caso de loading, mostra mensagem de carregando
        if (isLoading) {
            customMessage = (
                <div className="alert alert-info">
                    <strong>Aguarde!</strong> Carregando livros...
                </div>
            );

            // se já tenha finalizado e erro não seja nulo, mostra mensagem de erro
        } else if (isFinished && error) {
            customMessage = (
                <div className="alert alert-danger">
                    <strong>Desculpe!</strong> Ocorreu um erro ao tentar obter os livros
                </div>
            );

            // caso não esteja carregando, não tenha finalizado e não exista erro, significa que a nada esta sendo feito, então não mostra a paginação
        } else if (!isLoading && !isFinished && !error) {
            showPaginator = false;
        }

        return (
            <main>
                <div className="content">
                    <div className="row">
                        <h3 className="text-uppercase">Resultados do Google Books</h3>
                        <div className="border-blue m-b-20"></div>
                    </div>

                    <div className="row">
                        {!showPaginator ? null :
                            (
                                <List
                                    queryResult={queryResult}
                                    query={query}
                                    handlePageChange={handlePageChange}
                                    isFinished={isFinished}
                                    isLoading={isLoading}
                                    error={error}
                                    Item={BookBox}
                                    databaseIds={databaseIds}
                                    customMessage={customMessage}
                                    handleAddFavorite={handleAddFavorite}
                                />
                            )
                        }
                    </div>
                </div>
            </main>
        );
    }
}

SearchContainer.propTypes = {
    error: PropTypes.object,
    isFinished: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    query: PropTypes.object,
    queryResult: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    handlePageChange: PropTypes.func.isRequired,
    handleAddFavorite: PropTypes.func.isRequired,
    databaseIds: PropTypes.array,
};

/**
 * cria funções com acesso ao dispatch, dispachando actions
 */
export function mapDispatchToProps(dispatch) {
    return {
        handlePageChange: (evt) => {
            if (typeof evt.selected !== "undefined") {
                dispatch(changeSearchActivePageAction(evt.selected));
            }
        },
        handleAddFavorite: (item, status) => {
            if (status) {
                dispatch(removeNewBookFavoriteAction(item));
            } else {
                dispatch(addNewBookFavoriteAction(item));
            }
        },
    };
}

/**
 * usa o reselect para obter os dados salvos no store
 * todos os valores são automaticamentes atualizados em caso de alguma alteração na store
 */
const mapStateToProps = createStructuredSelector({
    error: selectAppSearchError(),
    isFinished: selectAppSearchIsFinished(),
    isLoading: selectAppSearchIsLoading(),
    query: selectAppSearchQuery(),
    queryResult: selectAppSearchQueryResult(),
    databaseIds: selectAppDatabaseIds(),
});

/**
 * injeta o dispatch e o state no container
 * react-redux irá obter todos os atributos e funções criadas e injetara no component como props
 */
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
