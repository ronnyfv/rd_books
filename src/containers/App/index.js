import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAppShowSidebar } from '../shared/selectors';
import { toggleSidebarAction } from '../shared/actions';

import Header from '../../components/Header';

export class AppContainer extends React.Component {
    render() {
        const { handleMobileButton, showSidebar, children } = this.props;

        return (
            <div>
                <Header handleMobileButton={handleMobileButton} showSidebar={showSidebar} />
                <section className="content">
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
};

// cria funções com acesso ao dispatch, dispachando actions
export function mapDispatchToProps(dispatch) {
    return {
        handleMobileButton: () => {
            dispatch(toggleSidebarAction());
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
