// Versão Quotes em Português

// Declarando variáveis globais
let globalText = null;
let globalAuthor = null;
let globalQuotes = [];
let globalButton = null;

// Acionar quando a página estiver carregada
window.addEventListener('load', start);

// Função assíncrona - conecta o HTML ao JS
async function start() {
    globalText = document.getElementById('text');
    globalAuthor = document.getElementById('author');
    globalButton = document.getElementById('newQuote');

    // Botão para solicitar uma nova Quote à API
    globalButton.addEventListener('click', start);

    await getQuotes();

    inspiracao();
}

// Função assíncrona - recebe os dados da API
async function getQuotes() {

    // init loading
    document.body.classList.add('loading');

    try {
        res = await fetch('https://shielded-chamber-42580.herokuapp.com');
        globalQuotes = await res.json();

    } catch (err) {
        console.log(err);
        globalQuotes = [{
            text: err,
            author: 'Error'
        }];
    }
    // finish loading
    setTimeout(function () {
        document.body.classList.remove('loading');
    }, 300);
}

// Função que acessa os dados retornados pela API - JSON
function inspiracao() {
    if (globalQuotes.length === 0) {
        return;
    }
    globalText.innerHTML = globalQuotes.Quote;
    globalAuthor.innerHTML = globalQuotes.Author;
} 