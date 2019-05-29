const quotes =[
    {
        name:'Gautama Buddha',
        quote:'All that we are is the result of what we have thought. The mind is everything. What we think we become.'
    },
    {
        name:'Swami Vivekananda',
        quote:'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.'
    },
    {
        name:'Abdul Kalam',
        quote:'To succeed in your mission, you must have single-minded devotion to your goal.'
    },
    {
        name:'Mother Teresa',
        quote:'The biggest problem in the world today is not poverty or disease but the lack of love and charity and the feeling of being unwanted.'
    },
    {
        name:'Bhagat Singh',
        quote:'The aim of life is no more to control the mind, but to develop it harmoniously; not to achieve salvation here after, but to make the best use of it here below.'
    }
];
const quoteBtn= document.querySelector('#quoteBtn');
const quoteAuthor= document.querySelector('#quoteAuthor');
const quote= document.querySelector('#quote');
 
quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML=quotes[random].name;
    quote.innerHTML=quotes[random].quote;
    

}
