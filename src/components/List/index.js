import React, { PropTypes } from 'react';
import ReactPaginate from 'react-paginate';

function List(props) {
    const { Item, queryResult, query, handlePageChange, customMessage, isFinished, isLoading, error } = props;
    const { activePage, resultCount, total } = query;

    // calcula alguns contadores usados para exibir informações na página e pelo ReactPaginate
    const countResults = activePage * resultCount;
    const countResultsMax = total;
    const pageCount = Math.floor(total / resultCount);

    // criar variaveis para guardar os componentes da página
    let content = null;
    let info = null;

    // caso loading true, mostra mensagem recebida pelo component pai
    if (isLoading) {
        content = customMessage;

        // caso tenha finalizado e error não seja nulo, mostra mensagem recebida pelo component pai
    } else if (isFinished && error) {
        content = customMessage;

        // caso tenha finalizado e error seja nulo, preenche lista, mensagem
    } else if (isFinished && !error) {
        content = queryResult.map((item, index) => (<Item index={index} item={item} key={item.id} />));
        info = (
            <span>
                Mostrando {countResults + 1} a {countResults + resultCount } de {countResultsMax} resultados.
            </span>
        );
    }

    return (
        <div>
            <div className="book-list-info m-b-20">
                {info}
            </div>

            <div className="book-list m-b-20">
                {content}
            </div>

            <div className="book-pagination">
                <ReactPaginate
                    previousLabel={<i className="fa fa-angle-left" />}
                    nextLabel={<i className="fa fa-angle-right" />}
                    breakLabel={<span>...</span>}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination pagination-split"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
}

List.propTypes = {
    Item: PropTypes.func.isRequired,
    queryResult: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    query: PropTypes.object.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    customMessage: PropTypes.object,
    isFinished: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
};

export default List;
