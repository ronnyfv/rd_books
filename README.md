# rd books

Projeto desafio.
Live: [https://rd-books-ronny.herokuapp.com/](https://rd-books-ronny.herokuapp.com/) 
Obs: heroku free tier, pode demorar até 30 segundos para iniciar depois de inativo por algum tempo

## Sobre

Esse projeto usa as seguintes tecnologias:

* React
* React Router
* Redux
* Redux-Saga
* Lodash
* Jest, para executar os testes, oferece uma configuração mais fácil que import karma, mocha e todas outras bibliotecas
* Reselect, para acessar os dados da store e receber atualizações quando os dados forem alterados
* Webpack, gerar as builds, adicionar recursos hot reload em caso de desenvolvimento
* Webpack Server, servidor express para disponibilizar os arquivos para desenvolvimento
* Gulp, gerenciar diretórios e gerar builds
* Eslint, mostrar errors durante o desenvolvimento, builds e commits
* Eslint Airbnb, padrão de lint usado pelo Airbnb
* Rimraf, remover diretório independente do SO


## Instalação

Para habilitar o desenvolvimento e conseguir rodar testes e builds, é preciso:

    npm install


### desenvolvimento

Para desenvolvimento usar:

    gulp dev

A build de desenvolvimento gera um diretório virtual `dev`, gera o bundle e fica observando por mudanças no código fonte. Qualquer mudança feita na pasta `src`, gera uma nova build.


### testes

Para rodar os testes, usar:

    npm run test

Jest é executado para rodar todos os testes na pasta `src`, ao final da execução, é gerado o coverage na pasta `coverage`.


### produção

Para produção usar:

    npm run build:prod

A build de produção deleta a pasta `build` e gera o bundle usando as configurações no `webpack.babel.js`. Código é minificado e otimizado.


## Estrutura


* /dev (código gerado para desenvolvimento)
* /build (código gerado para produção)
* /src (código fonte do projeto)
* .babelrc (configs para o babel)
* eslintrc.json (lint configs para editor/ide e webpack)
* jest.config.json (configs para o jest)
* .gitignore
* .gulpfile.babel.js (gerar build de desenvolvimento e produção)
* package.json
* README.md
* webpack.babel.js (configurações para gerar build de desenvolvimento e produção)