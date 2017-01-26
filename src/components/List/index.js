import React, { PropTypes } from 'react';
import ReactPaginate from 'react-paginate';

function List(props) {
    const { Item, queryResult, query, handlePageChange, customMessage } = props;
    const { activePage, resultCount, total } = query;

    const countResults = activePage * resultCount || 0;
    const countResultsMax = total;

    const pageCount = total / resultCount;

    return (
        <div>
            <div className="book-list-info m-b-20">
                <span>
                    Mostrando {countResults + 1} a {countResults + resultCount } de {countResultsMax} resultados.
                </span>
            </div>

            <div className="book-list m-b-20">
                {!queryResult ? null : queryResult.map((item, index) => (<Item index={index} item={item} key={item.id} />))}
            </div>

            {!customMessage ? null :
                (
                    <div>
                        {customMessage}
                    </div>
                )
            }

            <div className="book-pagination">
                <ReactPaginate
                    previousLabel={<i className="fa fa-angle-left" />}
                    nextLabel={<i className="fa fa-angle-right" />}
                    breakLabel={<span>...</span>}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
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
};

export default List;
