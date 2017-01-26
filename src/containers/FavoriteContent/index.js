import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export class FavoriteContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>FavoriteContainer</h2>
            </div>
        );
    }
}


FavoriteContainer.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
