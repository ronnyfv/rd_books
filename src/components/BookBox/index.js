import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

function BookBox(props) {
    const { item } = props;

    const thumb = item.volumeInfo.imageLinks.thumbnail;
    const title = item.volumeInfo.title;
    const description = item.volumeInfo.description;
    const authors = _.map(item.volumeInfo.authors).join(', ');
    const publishedDate = item.volumeInfo.publishedDate;

    return (
        <div className="book-item group">
            <div className="col span_1_of_5 image">
                <img src={thumb} alt="frontcover" className="img-responsive" />
            </div>
            <div className="col span_4_of_5 info">
                <div className="title">
                    <Link to={'/livro'}>{title}</Link>
                </div>
                <div className="author">
                    {authors} - {publishedDate}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="stats-and-actions">
                    <div className="pull-right m-t-5">
                        <button className="btn btn-ghost btn-blue">
                            <i className="fa fa-star-o m-r-5" /> favoritar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

BookBox.propTypes = {
    item: PropTypes.object.isRequired,
};

export default BookBox;
