import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props) {
    const { handleMobileButton, showSidebar } = props;

    return (
        <header>
            <div className="wrapper">
                <div className="mobile-icon">
                    <Link onClick={handleMobileButton}>
                        <i className={`fa ${showSidebar ? 'fa-chevron-left' : 'fa-bars'}`} />
                    </Link>
                </div>
                <div className="title">
                    <h1>
                        RD Books
                    </h1>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    handleMobileButton: PropTypes.func.isRequired,
    showSidebar: PropTypes.bool.isRequired,
};

export default Header;
