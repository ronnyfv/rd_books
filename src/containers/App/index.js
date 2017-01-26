import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export class AppContainer extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                {React.Children.toArray(children)}
            </div>
        );
    }
}


AppContainer.propTypes = {
    children: PropTypes.node,
};

// cria funções com acesso ao dispatch, dispachando actions
export function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

// usa o reselect para obter os dados salvos no store
const mapStateToProps = createStructuredSelector({
    // ...
});

// injeta o dispatch e o state no component Home
// react-redux irá obter todos os atributos e funções criadas e injetara no component como props
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
