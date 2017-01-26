import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Sidebar(props) {
    const { showSidebar } = props;

    return (
        <nav className={showSidebar ? 'open' : null}>
            <div className="m-t-15">
                <div className="row m-b-20">
                    <ul className="menu">
                        <li className={`item selected`}>
                            <Link to={'/procura'}>
                                <i className="fa fa-search" />
                                <span>Procura</span>
                            </Link>
                        </li>
                        <li className={`item`}>
                            <Link to={'/favoritos'}>
                                <i className="fa fa-star" />
                                <span>Favoritos</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Sidebar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
};

export default Sidebar;
