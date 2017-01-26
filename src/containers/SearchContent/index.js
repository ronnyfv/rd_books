import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

export class SearchContainer extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h2>Procurar</h2>
                <Link to={'/favaritos'}>teste</Link>
            </div>
        );
    }
}


SearchContainer.propTypes = {};

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
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
