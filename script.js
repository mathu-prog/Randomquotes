const Quotes_text = document.getElementById("Quotes_text");
const author_name = document.getElementById("author_name");

const nextBtn = document.getElementById('nextBtn');


const getQuotes = async() => {
    const res = await fetch('https://type.fit/api/quotes');
    const array = await res.json()
    const Random = Math.floor(Math.random()*array.length)
    const answer = array[Random];
    const quote = answer.text;
    const authorName = answer.author;
    Quotes_text.innerText = quote;
    author_name.innerText = authorName;
    //console.log(answer);
}

nextBtn.addEventListener('click',getQuotes);