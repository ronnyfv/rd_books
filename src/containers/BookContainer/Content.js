import React, { PropTypes } from 'react';

function Content(props) {
    const { data, authors } = props;
    return (
        <div className="content book-content">
            <div className="row">
                <h3 className="text-uppercase">{data.volumeInfo.title}</h3>
                <div className="border-blue m-b-10"></div>
            </div>
            <div className="row description">
                <h3 className="text-uppercase">Resumo</h3>
                <div className="border-blue m-b-20"></div>
                <div className="group">
                    <div className="col span_4_of_5 image">
                        <p className="text-muted text-overflow">
                            {authors}
                        </p>
                        <p className="m-t-20">
                            {data.volumeInfo.description}
                        </p>
                    </div>
                    <div className="col span_1_of_5 info">
                        <img src={data.volumeInfo.imageLinks.thumbnail} alt="frontcover" className="img-responsive" />
                    </div>
                </div>
            </div>
        </div>
    );
}

Content.propTypes = {
    data: PropTypes.object.isRequired,
    authors: PropTypes.string.isRequired,
};

export default Content;
