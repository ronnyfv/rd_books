O objetivo deste projeto desafio é que o desenvolvedor demonstre sua familiaridade com
tecnologias de front-end, padrões de programação e forneça uma amostra do que significa
clean code e reutilização de componentes.
Por favor, coloque comentários no seu código-fonte explicando o funcionamento e suas
decisões e dê um resumo sobre as escolhas de arquitetura que você considerou.


Projeto

Para esse projeto, vamos utilizar a API do Google Books.
Você precisa construir um aplicativo web para pesquisa de livros e deve atender os requisitos
de usuário abaixo:

● Como usuário eu quero pesquisar um livro por palavra-chave e ver o resultado na
mesma página;

● Como usuário eu quero conseguir fazer paginação do resultado da pesquisa;

● Como usuário eu quero marcar um livro como favorito;

● Como usuário eu quero clicar em um livro na listagem e ver uma página com mais
informações do livro;

● Como usuário eu gostaria que a palavra-chave pesquisada fosse destacada no
resultado da pesquisa.


Você pode ajustar a interface do usuário como achar melhor, porém, é obrigatório ser uma SPA
(Single Page Application).


API Google Books

A API do Google Books oferece suporte a consulta sem a necessidade de autenticação, todas
as informações necessárias estão no endereço abaixo:
https://developers.google.com/books/docs/overview


UI/UX

Sua UI deve ser algo simples, amigável e atraente para os olhos. Sinta-se livre para usar
quaisquer recursos de UI que você gostaria. Por exemplo, você pode usar o Twitter Bootstrap,
ou qualquer outra biblioteca de interface do usuário.


Arquitetura

Não existe limitação. Você tem a liberdade de construir o design de arquitetura na maneira que
você quiser. Porém deve ter foco no clean code e reutilização de componentes. Concentre-se
nas melhores práticas de frontend. Mostre-nos que você sabe como produzir aplicações web
modernas de alta qualidade.

Ex.: Para salvar a informação do favorito, você pode utilizar Local Storage por exemplo.
Bibliotecas​:

Você pode usar a biblioteca de sua preferência, mas gostaríamos de ver suas habilidades em
uma dessas 3 tecnologias: Ember.js, React.js ou AngularJS 2.


TDD/BDD

Queremos ver como você constrói testes automatizados no seu projeto. Você pode usar a
tecnologia que considerar mais adequada.


Backend

Não é necessário nenhum código de back-end. Devemos ser capazes de executar o projeto,
apenas abrindo o arquivo index.html ou executando alguma ferramenta Node.


Entregável

Você precisa entregar o código-fonte em um repositório no github.com. O repositório precisa ter
um arquivo README que explica o que você fez e como executar seu projeto.
Se necessário, explique as decisões técnicas tomadas, as escolhas por frameworks, uso de
patterns, etc. Lembre-se que este é um processo seletivo e estas informações podem ser
valiosas para a nossa avaliação.

O projeto tem que ter um build que rode os testes, crie um bundle minified. Publique o resultado
do seu build para uma URL pública. Pode ser S3, Heroku, pages.github.com, você decide.
Bônus se o build tiver também uma solução de deploy automático.
