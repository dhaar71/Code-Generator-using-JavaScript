let btn= document.querySelector('#new-quote');
let quote = document.getElementById('quote');
let person = document.getElementById('person');

const quotes = [{
    quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    person: 'William Faulkner'
},{
    quote: 'The first draft is just you telling yourself the story.',
    person: 'Terry Pratchett'
},{
    quote: "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.",
    person: 'Octavia E. Butler'
},{
    quote: 'Start before you’re ready.',
    person: 'Steven Pressfield'
},{
    quote: 'You can always edit a bad page. You can’t edit a blank page',
    person: 'Jodi Picoult'
},{
    quote:"You can’t wait for inspiration. You have to go after it with a club.",
    person: 'Jack London'
},{
    quote: 'I have never started a poem yet whose end I knew. Writing a poem is discovering',
    person: 'Robert Frost'
},{
    quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    person: 'Toni Morrison'
},{
    quote: "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles." ,
    person: 'Shannon Hale'
},{
    quote:  'I get a lot of letters from people. They say, "I want to be a writer. What should I do?" I tell them to stop writing to me and get on with it.',
    person: 'Ruth Rendell'
},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
});