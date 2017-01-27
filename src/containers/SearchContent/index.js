import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectAppSearchError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,
} from '../shared/selectors';

import {
    requestLoadSearchAction,
    changeActivePageSearchAction,
} from '../shared/actions';

import List from '../../components/List';
import BookBox from '../../components/BookBox';

export class SearchContainer extends React.Component {
    componentWillMount() {
        /**
         * loadBooks faz o request para carregar a lista de livros
         * chamado durante o mount do container
         */
        this.props.loadBooks(this.props.query);
    }

    render() {
        const { error, isFinished, isLoading, query, queryResult, handlePageChange } = this.props;

        /**
         * O component List pode receber um elemento que será mostrando em caso de loading ou erro.
         * Código abaixo usa o variável para guardar um elemento de alerta que será enviado para o component List.
         * Em caso de sucesso, mensagem nula é enviada.
         */
        let customMessage = null;

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
        }

        return (
            <main>
                <div className="content">
                    <div className="row">
                        <h3 className="text-uppercase">Resultados do Google Books</h3>
                        <div className="border-blue m-b-20"></div>
                    </div>

                    <div className="row">
                        <List
                            queryResult={queryResult}
                            query={query}
                            handlePageChange={handlePageChange}
                            isFinished={isFinished}
                            isLoading={isLoading}
                            error={error}
                            Item={BookBox}
                            customMessage={customMessage}
                        />
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
    loadBooks: PropTypes.func.isRequired,
    handlePageChange: PropTypes.func.isRequired,
};

/**
 * cria funções com acesso ao dispatch, dispachando actions
 */
export function mapDispatchToProps(dispatch) {
    return {
        loadBooks: () => {
            dispatch(requestLoadSearchAction());
        },
        handlePageChange: (evt) => {
            if (typeof evt.selected !== "undefined") {
                dispatch(changeActivePageSearchAction(evt.selected));
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
});

/**
 * injeta o dispatch e o state no container
 * react-redux irá obter todos os atributos e funções criadas e injetara no component como props
 */
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
