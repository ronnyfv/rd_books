import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAppShowSidebar } from '../shared/selectors';
import { toggleSidebarAction, initDatabaseAction } from '../shared/actions';
import { requestSearchLoadAction } from '../SearchContent/actions';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export class AppContainer extends React.Component {

    componentWillMount() {
        this.props.handleInitDatabase();
    }

    render() {
        const { handleMobileButton, showSidebar, children, location, loadBooks } = this.props;

        const showForm = location.pathname === '/';

        return (
            <div>
                <Header handleMobileButton={handleMobileButton} showSidebar={showSidebar} />
                <section className="wrapper">
                    <Sidebar showSidebar={showSidebar} showForm={showForm} loadBooks={loadBooks} />
                    {React.Children.toArray(children)}
                </section>
                <div className={`navbar-overlay ${showSidebar ? 'open' : null}`} onClick={handleMobileButton}></div>
            </div>
        );
    }
}


AppContainer.propTypes = {
    handleMobileButton: PropTypes.func.isRequired,
    showSidebar: PropTypes.bool.isRequired,
    children: PropTypes.node,
    handleInitDatabase: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    loadBooks: PropTypes.func.isRequired,
};

// cria funções com acesso ao dispatch, dispachando actions
export function mapDispatchToProps(dispatch) {
    return {
        // método chamado pelo clique no botão de barras mobile, ele aparece apenas em resoluções baixas, serve para mostrar ou esconder a sidebar
        handleMobileButton: () => {
            dispatch(toggleSidebarAction());
        },
        // método iniciado na montagem do component App, para carregar os dados do localStorega para a store
        handleInitDatabase: () => {
            dispatch(initDatabaseAction());
        },
        // caso o form que existe na Sidebar seja enviado, faz a chamada desse método, obtendo os dados preenchidos e enviado para pesquisa
        loadBooks: (evt) => {
            evt.preventDefault();

            const { query } = evt.target;

            if (query && query.value && query.value.length !== 0) {
                dispatch(requestSearchLoadAction(query.value));
            }
        },
    };
}

// usa o reselect para obter os dados salvos no store
const mapStateToProps = createStructuredSelector({
    showSidebar: selectAppShowSidebar(),
});

// injeta o dispatch e o state no component AppContainer
// react-redux irá obter todos os atributos e funções criadas e injetara no component como props
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
