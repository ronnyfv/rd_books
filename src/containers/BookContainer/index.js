import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import {
    requestLoadBookAction,
} from '../shared/actions';

import {
    selectAppBookError,
    selectAppBookIsFinished,
    selectAppBookIsLoading,
    selectAppBookData,
} from '../shared/selectors';

import Content from './Content';

export class BookContainer extends React.Component {
    componentWillMount() {
        const id = this.props.params ? this.props.params.id : null;
        this.props.loadBook(id);
    }

    render() {
        const { data, isLoading, isFinished, error } = this.props;

        let content = null;

        // em caso de loading, mostra mensagem de carregando
        if (isLoading) {
            content = (
                <div className="content book-content">
                    <div className="alert alert-info">
                        <strong>Aguarde!</strong> Carregando livro...
                    </div>
                </div>
            );

            // se já tenha finalizado e erro não seja nulo, mostra mensagem de erro
        } else if (isFinished && error) {
            content = (
                <div className="content book-content">
                    <div className="alert alert-danger">
                        <strong>Desculpe!</strong> Ocorreu um erro ao tentar obter o livro desejado
                    </div>
                </div>
            );

            // se já tenha finalizado e erro seja nulo, carrega o conteúdo para mostrar informações sobre o livro
        } else if (isFinished && !error) {
            const authors = _.map(data.volumeInfo.authors).join(', ');
            content = <Content data={data} authors={authors} />;
        }

        return (
            <main>
                {content}
            </main>
        );
    }
}

BookContainer.propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
    loadBook: PropTypes.func.isRequired,
    error: PropTypes.object,
    isFinished: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

/**
 * cria funções com acesso ao dispatch, dispachando actions
 */
export function mapDispatchToProps(dispatch) {
    return {
        loadBook: (id) => {
            dispatch(requestLoadBookAction(id));
        },
    };
}

/**
 * usa o reselect para obter os dados salvos no store
 * todos os valores são automaticamentes atualizados em caso de alguma alteração na store
 */
const mapStateToProps = createStructuredSelector({
    error: selectAppBookError(),
    isFinished: selectAppBookIsFinished(),
    isLoading: selectAppBookIsLoading(),
    data: selectAppBookData(),
});

/**
 * injeta o dispatch e o state no container
 * react-redux irá obter todos os atributos e funções criadas e injetara no component como props
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
