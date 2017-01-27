import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Sidebar(props) {
    const { showSidebar } = props;

    return (
        <nav className={showSidebar ? 'open' : null}>
            <div className="m-t-15">

                <div className="row m-b-40">
                    <ul className="menu">
                        <li className={`item`}>
                            <Link activeClassName="active" to={'/'} onlyActiveOnIndex>
                                <i className="fa fa-search" />
                                <span>Procura</span>
                            </Link>
                        </li>
                        <li className={`item`}>
                            <Link activeClassName="active" to={'/favoritos'} onlyActiveOnIndex>
                                <i className="fa fa-star" />
                                <span>Favoritos</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="row">
                    <div className="search-form">
                        <h4 className="text-uppercase">Procurar todos</h4>
                        <div className="border-blue m-b-20"></div>
                        <form role="form" className="form">
                            <div className="form-group">
                                <input type="text" name="" className="form-control" placeholder="palavra-chave" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-small btn-green pull-right">
                                    <i className="fa fa-search m-r-5" />
                                    procurar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Sidebar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
};

export default Sidebar;
