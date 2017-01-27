import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

function BookBox(props) {
    const { item, handleAddFavorite, isFavorite } = props;

    const { id, title, publishedDate } = item;
    const thumb = item.imageLinks ? item.imageLinks.thumbnail : null;
    const description = item.description ? item.description.substr(0, 250) : 'Não disponível';
    const authors = _.map(item.authors).join(', ');

    return (
        <div className="book-item group">
            <div className="col span_1_of_5 image">
                <img src={thumb} alt="frontcover" className="img-responsive" />
            </div>
            <div className="col span_4_of_5 info">
                <div className="title">
                    <Link to={`/livro/${id}`}>{title}</Link>
                </div>
                <div className="author">
                    {authors} - {publishedDate}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="stats-and-actions">
                    {!handleAddFavorite ? null :
                        (<div className="pull-right m-t-5">
                            {isFavorite ?
                                (
                                    <button className="btn btn-ghost btn-blue" onClick={() => (handleAddFavorite(item, isFavorite))}>
                                        <i className="fa fa-star m-r-5" /> remover
                                    </button>
                                ) : (
                                    <button className="btn btn-ghost btn-blue" onClick={() => (handleAddFavorite(item, isFavorite))}>
                                        <i className="fa fa-star-o m-r-5" /> adicionar
                                    </button>
                                )
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

BookBox.propTypes = {
    item: PropTypes.object.isRequired,
    handleAddFavorite: PropTypes.func,
    isFavorite: PropTypes.bool,
};

export default BookBox;
