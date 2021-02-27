// API - https://github.com/bernardocamps/quotes-heroku-2

let globalText = null;
let globalAuthor = null;
let globalQuotes = [];
let globalButton = null;
let i = 0;

// Ao carregar a página, chamar a função start()
window.addEventListener('load', start);

// conecta ao HTML e chama as funções getQuotes() e inspiracao()
async function start() {
    globalText = document.getElementById('text');
    globalAuthor = document.getElementById('author');
    globalButton = document.getElementById('newQuote');
    await getQuotes();

    // caso o botão refresh seja acionado, chama a função inspiracao()
    globalButton.addEventListener('click', inspiracao);
    
    inspiracao();
}

// Função assíncrona que solicita à API o arquivo JSON e o armazena na array globalQuotes
async function getQuotes() {
    try {
        res = await fetch('https://quotes2.herokuapp.com/api/quotes');
        globalQuotes = await res.json();

    } catch (err) {
        console.log(err);

        globalQuotes = [{
            text: err,
            author: 'Error'
        }];
    }
}

// Atribui os elementos da array (text, author) ao HTML
function inspiracao() {
    // Encerra caso a array esteja vazia
    if (globalQuotes.length === 0) {
        return;
    }
    
    /* Percorre os elementos da array de forma sequencial; quando percorrer todos 
    os objetos, chama a função start para requisitar novas quotes à API */
    if (i < globalQuotes.length) {
        globalText.innerHTML = globalQuotes[i].text;
        globalAuthor.innerHTML = globalQuotes[i].author;
        i += 1;
    } else {
        i = 0;
        start();
    }
}