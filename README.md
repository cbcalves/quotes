# Quotes

Projeto proposto por **[Marcelo Pinheiro](https://twitter.com/mpinheir)**, administrador do grupo **[OsProgramadores](https://t.me/osprogramadores)**, a partir da frase 
"Todo dia uma msg nesse grupo que te inspira a continuar, ótimo" (MERCER, Mateus).

**Objetivo**: criar um projeto em JavaScript para mostrar **quotes** diferentes todos os dias.

- Link para versão em Inglês: https://quotes2.herokuapp.com
- Link para versão em Português: https://bernardocamps.github.io/quotes/

## ⚙ Melhorias
- [x] Introdução de css e melhorias na interface.
- [x] Mudança para async/await - economia de dados da API.
- [x] Adicionado botão para atualizar a página.
- [x] Botão atualizar: ajustar CSS - [Issue](https://github.com/bernardocamps/quotes/issues/10)
- [x] Layout responsivo para ajustar melhor à tela de celulares - [Issue](https://github.com/bernardocamps/quotes/issues/12)
- [x] Banco de dados (MongoDB) para armazenar as quotes.
- [x] Backend em ExpressJS - Heroku - [Link](https://github.com/bernardocamps/quotes-heroku-2)
- [x] Conectados frontend e backend com melhora importante na performance - [Link do PR](https://github.com/bernardocamps/quotes-heroku-2/pull/1)
- [x] Backend em Go - [Link da API](https://shielded-chamber-42580.herokuapp.com)

## 👥 Contribuidores (ordem alfabética)
- [Bernardo Campos](https://github.com/bernardocamps)
- [Bruno Sana](https://github.com/brunosana)
- [Carlos Alves](https://github.com/cbcalves)
- [Gabriel Mendonça](https://github.com/brunoom1)
- [Lucas Lacerda](https://github.com/LucasLaacerda)
- [Marcelo Pinheiro](https://github.com/mpinheir)
- [Mariana Lira](https://github.com/marilira)
- [Mateus Mercer](https://github.com/MatMercer)

## 📚 Entendendo o código
### HTML
* O que é HTML? - [Link](https://developer.mozilla.org/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started)
* Layout responsivo: adicionando meta de viewport - [Link](https://github.com/bernardocamps/quotes/pull/13)

### CSS
* O que é CSS? - [Link](https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico)
* Z-index - para que serve? - [Link](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

### JavaScript
* O que é JavaScript? - [Link](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)
* O que é uma API? [Link](https://developer.mozilla.org/pt-BR/docs/Glossario/API)
* O que é uma Função Assíncrona? - [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas)
* O que significa a declaração try...catch? [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
* O que são Operadores de Comparação? [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_de_comparação)
* Saiba mais sobre Assessores de Propriedade - [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
* Entendendo a função Math.random() - [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Backend
* O que é Backend? [Link](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps/Introduction)
* Introdução a Node e Express - [Link](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdução)
* Entregando arquivos estáticos no Express - [Link](https://expressjs.com/pt-br/starter/static-files.html)
* Definindo rotas no Express - [Link](https://expressjs.com/pt-br/guide/routing.html)
* O que é res.status(400)? Saiba em "Códigos de status de respostas HTTP" - [Link](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

### Banco de Dados (MongoDB Atlas)
* Como não deixar exposta a credencial de acesso ao Banco de Dados? [Link](https://github.com/motdotla/dotenv)
* Extraindo os dados do banco de dados:
    * .find( ) - [Link](https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find)
    * .skip( ) - [Link](https://docs.mongodb.com/manual/reference/method/cursor.skip/#cursor.skip)
    * .limit( ) - [Link](https://docs.mongodb.com/manual/reference/method/cursor.limit/)
    * .toArray( ) - [Link](https://docs.mongodb.com/manual/reference/method/cursor.toArray/)
