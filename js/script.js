/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

//store quotes in an array of objects with quote, source, year, and citation properties
const quotes = [
  {
    quote: "I know starting careers in troubled times is a challenge, but it is also a privilege. Because it's moments like these that force us to try harder, dig deeper and to discover gifts we never knew we had. To find the greatness that lies within each of us. So don't ever shy away from that endeavor. Don't stop adding to your body of work. I can promise that you will be the better for that continued effort as will be this nation that we all love.",
    source: "Barack Obama",
    year: "2009",
    citation: "Arizona State University Commencement Address",
  },
  {
    quote: "You will not find your passion in things and you will not find your passion in money. The more things and the more money you have, the more you will look around and use that as the metric and there will be someone with more.",
    source: "Randy Pausch",
    year: "2008",
    citation: "Carnegie Mellon Commencement Speech",
    tag: "Passion"
  },
  {
    quote: "Life is a foreign language; all men mispronounce it.",
    source: "Christopher Morley",
    year: "1890-1956",
    citation: "",
    tag: "Life"
  },
  {
    quote: "When you cannot get a compliment any other way pay yourself one.",
    source: "Mark Twain",
    year: "1835-1910",
    citation: "",
  },
  {
    quote: "Prediction is very difficult, especially about the future.",
    source: "Niels Bohr",
    year: "1885-1962",
    citation: "",
    tag: "The future"
  },
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  //generate a random number between 0 and the length of the quotes array
  const randomQuote = Math.floor(Math.random() * quotes.length);
  //return a random quote object
  return quotes[randomQuote];
};

/***
 * `printQuote` function
 ***/
//generate  a quote and display it on the page
const printQuote = () => {
  //store random quote object
  const randomQuote = getRandomQuote();
  //build html string
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;
  //check if there is a citation property
  if (randomQuote.citation && randomQuote.citation !== "") {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  //check if there is a year property
  if (randomQuote.year && randomQuote.year !== "") {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  if(randomQuote.tag && randomQuote.tag !== ""){
    html += `<span class="tag"> - ${randomQuote.tag} </span>`;
  }
  //close the paragraph tag
  html += `</p>`;

  //replace the quote box with the new quote
  document.getElementById("quote-box").innerHTML = html;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
