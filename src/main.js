import React from 'react';
import ReactDOM from 'react-dom';

// css reset
import 'sanitize.css/sanitize.css';

// estilo principal
import './main.scss';


/**
 * render
 */
function init() {
    ReactDOM.render(
        <div>
            <h1>Hello World!</h1>
        </div>,
        document.getElementById('app')
    );
}

/**
 * init
 */
init();
