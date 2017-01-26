import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAppShowSidebar } from '../shared/selectors';

import Sidebar from '../../components/Sidebar';

export class SearchContainer extends React.Component {
    render() {
        const { showSidebar } = this.props;

        return (
            <div className="wrapper">
                <Sidebar showSidebar={showSidebar} />
                <main>
                    <div className="row">
                        <h3 className="text-uppercase">Resultados</h3>
                        <div className="border-blue m-b-20"></div>
                    </div>
                </main>
            </div>
        );
    }
}


SearchContainer.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
};

// cria funções com acesso ao dispatch, dispachando actions
export function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

// usa o reselect para obter os dados salvos no store
const mapStateToProps = createStructuredSelector({
    showSidebar: selectAppShowSidebar(),
});

// injeta o dispatch e o state no component SearchContainer
// react-redux irá obter todos os atributos e funções criadas e injetara no component como props
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
