import React from 'react';

/**
 * NotFound
 *
 * Dependendo do modo que o arquivo index.html for acessado, essa página pode não servir para nada.
 * Caso o projeto for iniciado por um servidor (express, feathers, etc.) que redirecione todas as requisições
 * para a pasta 'public' ou 'build', ou seja, irá fazer com o react-router lide com errors 404.
 */
function NotFoundContent() {
    return (
        <div>
            <h2>Erro 404</h2>
        </div>
    );
}

NotFoundContent.propTypes = {};

export default NotFoundContent;
