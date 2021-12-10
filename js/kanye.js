const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}
const displayQuote = quote => {
    const quoteEliment = document.getElementById('quote');
    quoteEliment.innerText = quote.quote

}