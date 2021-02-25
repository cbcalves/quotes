// Utilizando Quotes Free API
// https://type.fit/api/quotes

let globalText = null;
let globalAuthor = null;
let globalQuotes = [];
let globalButton = null;

window.addEventListener('load', start);

async function start() {
    globalText = document.getElementById('text');
    globalAuthor = document.getElementById('author');
    globalButton = document.getElementById('newQuote');
    await getQuotes();

    globalButton.addEventListener('click', inspiracao);
    
    inspiracao();
}

async function getQuotes() {
    try {
        // API temporária
        res = await fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes');
        globalQuotes = await res.json();

    } catch (err) {
        console.log(err);

        globalQuotes = [{
            text: err,
            author: 'Error'
        }];
    }
}

function inspiracao() {
    if (globalQuotes.length === 0) {
        return;
    }
    var i = Math.floor(Math.random() * globalQuotes.quotes.length);
    globalText.innerHTML = globalQuotes.quotes[i].text;
    globalAuthor.innerHTML = globalQuotes.quotes[i].author;
}