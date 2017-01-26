import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectAppSearchIsError,
    selectAppSearchIsFinished,
    selectAppSearchIsLoading,
    selectAppSearchQuery,
    selectAppSearchQueryResult,
} from '../shared/selectors';

import { chageActivePageAction } from '../shared/actions';

import List from '../../components/List';
import BookBox from '../../components/BookBox';

export class SearchContainer extends React.Component {
    render() {
        const { isError, isFinished, isLoading, query, queryResult, handlePageChange } = this.props;

        let customMessage = null;

        if (isLoading) {
            customMessage = (
                <span>Aguarde, carregando resultados...</span>
            );
        } else if (isFinished && isError) {
            customMessage = (
                <span>Desculpe, ocorreu um erro ao tentar obter os livros.</span>
            );
        } else if (isFinished && queryResult.length === 0) {
            customMessage = (
                <span>Não foi encontrado nenhum livro.</span>
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
                        <List queryResult={queryResult} query={query} handlePageChange={handlePageChange} Item={BookBox} customMessage={customMessage} />
                    </div>
                </div>
            </main>
        );
    }
}


SearchContainer.propTypes = {
    isError: PropTypes.bool.isRequired,
    isFinished: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    query: PropTypes.object,
    queryResult: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    handlePageChange: PropTypes.func.isRequired,
};

// cria funções com acesso ao dispatch, dispachando actions
export function mapDispatchToProps(dispatch) {
    return {
        handlePageChange: (evt) => {
            if (typeof evt.selected !== "undefined") {
                dispatch(chageActivePageAction('search', evt.selected));
                window.scrollTo(0, 0);
            }
        },
    };
}

// usa o reselect para obter os dados salvos no store
const mapStateToProps = createStructuredSelector({
    isError: selectAppSearchIsError(),
    isFinished: selectAppSearchIsFinished(),
    isLoading: selectAppSearchIsLoading(),
    query: selectAppSearchQuery(),
    queryResult: selectAppSearchQueryResult(),
});

// injeta o dispatch e o state no component SearchContainer
// react-redux irá obter todos os atributos e funções criadas e injetara no component como props
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
